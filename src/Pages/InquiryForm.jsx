import { useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const InquiryForm = () => {
  useEffect(() => {
    document.title = "Diagno | Inquiry";
  }, []);
  return (
    <div>

      <section className="p-6 card shadow-xl">
        <div className=" flex justify-center py-10">
          <h1 className="mx-auto text-4xl font-bold text-blue-500">
            Inquiry Form
          </h1>
        </div>
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-emerald-600 border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <h1>Message</h1>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>
            <div className="col-span-full flex justify-center">
              <input
                className="btn btn-primary mx-auto"
                type="button"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default InquiryForm;
