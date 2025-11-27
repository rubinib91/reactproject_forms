import React, { useEffect, useState } from "react";

const DisplayData = () => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("institutereview");
    if (stored) {
      setStoredData(JSON.parse(stored));
    }
  }, []);

 


  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-200 to-orange-300 flex justify-center items-center p-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-orange-300">
        
        <h1 className="text-3xl font-bold text-orange-700 text-center mb-8">
          Institute Review Details
        </h1>

        {storedData ? (
          <div className="space-y-5">

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Institute Name</p>
              <p className="text-gray-900">{storedData.institutename}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Address</p>
              <p className="text-gray-900">{storedData.address}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Syllabus Updated</p>
              <p className="text-gray-900">{storedData.syllabus}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Recent Technologies</p>
              <p className="text-gray-900">{storedData.tech}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Practical Classes</p>
              <p className="text-gray-900">{storedData.practical}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Review</p>
              <p className="text-gray-900">{storedData.review}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Your Name</p>
              <p className="text-gray-900">{storedData.uname}</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-xl shadow border border-orange-200">
              <p className="text-orange-700 font-bold">Mobile Number</p>
              <p className="text-gray-900">{storedData.mobile}</p>
            </div>

          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-red-600">
            No Review Data Found!
          </p>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
