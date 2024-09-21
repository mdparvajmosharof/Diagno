import React from 'react'
import { useBooked } from '../Hooks/useBooked'
import { MdDownload } from 'react-icons/md';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import jsPDF from 'jspdf';

const TestResult = () => {

    const [booked] = useBooked();
    const axiosPublic = useAxiosPublic();
    console.log(booked)

    const DeliveredTests = booked.filter(tests => tests.report == "delivered");
    console.log(DeliveredTests)

    const handleDownload = async (tstId) => {

        try {
            const res = await axiosPublic.get(`/booked/test/${tstId}`);
            const booked = res.data

            const doc = new jsPDF();

            doc.setFont("helvetica", "bold");
            doc.text("User Information", 105, 10, null, null, "center");
            doc.text(`Test: ${booked?.title}`, 10, 20);
            doc.text(`Your Email: ${booked?.email}`, 10, 30);
            doc.text(`Paid : $ ${booked?.price}`, 10, 40);
            doc.text(`Report : ${booked?.report}`, 10, 50);
            doc.text(`Published date : ${booked?.published}`, 10, 60);
            doc.text(`Result : ${booked?.result}`, 10, 70);
            
            doc.save("userinfo.pdf");
        }catch(err){
            console.error("Error generating PDF:", err);
        }

    }

    if(!DeliveredTests){
        return (
            <div className='m-0 mx-auto'>NONE OF YOUR TEST RESULT DELIVERED YET!</div>
        )
    }

    if(DeliveredTests.length == 0){
        return (
            <div className='flex justify-center mt-10'>
                <div> You didn't book any Test. </div>
               
            </div>
        )
    }

  return (
    <div>
       <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Test Name</th>
                            <th>Appointment Date</th>
                            <th>Report</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            DeliveredTests.map((item, idx) => <>
                                <tr key={item._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td>{item.report}</td>
                                    <td onClick={() =>handleDownload(item._id)} className='btn btn-outline btn-primary text-lg'><MdDownload></MdDownload></td>
                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default TestResult
