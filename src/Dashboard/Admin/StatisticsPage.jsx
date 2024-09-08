import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import Loading from '../../Subpage/Loading';

const StatisticsPage = () => {
  const [bookedData, setBookedData] = useState([]);
  const [deliveryRatioData, setDeliveryRatioData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedServices = async () => {
      const res = await axiosSecure.get('/featured');
      console.log(res.data)
      if (res.data && Array.isArray(res.data)) {
        const formattedData = res.data.map(item => ({
          name: item.testDetails.title,
          bookings: item.count, 
        }));
        setBookedData(formattedData);
        setLoading(false);
      }
    };

    const fetchDeliveryRatio = async () => {
      const res = await axiosSecure.get('/booked/delevered');
      if (res.data && Array.isArray(res.data)) {
        const completedCount = res.data.filter(item => item.report === 'delivered').length;
        const pendingCount = res.data.filter(item => item.report === 'pending').length;
        setDeliveryRatioData([
          { name: 'Completed', value: completedCount },
          { name: 'Pending', value: pendingCount }
        ]);
        setLoading(false);
      }
    };

    fetchBookedServices();
    fetchDeliveryRatio();
  }, [axiosSecure]);

  if (loading) {
    return <Loading />;
  }

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className='ml-2'>
      <h2 className="text-2xl font-bold text-center">Statistics</h2>

      <div className="my-6">
        <h3 className="text-xl font-bold mb-3">Mostly Booked Services :</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookedData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookings" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-6">
        <h3 className="text-xl font-bold mb-3">Service Delivery Ratio :</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={deliveryRatioData}
              cx="50%"
              cy="50%"
              label
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {deliveryRatioData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsPage;
