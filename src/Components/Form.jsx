import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    institutename: "",
    address: "",
    syllabus: "",
    tech: "",
    practical: "",
    review: "",
    uname: "",
    mobile: ""
  });

  const valueschange = (e) => {
  const { name, value } = e.target;
  const updatedData = { ...data, [name]: value };
  setData(updatedData);
  console.log("Updated Data:", updatedData);
};


  const buttonclick = (e) => {
  e.preventDefault();

  if (
    !data.institutename ||
    !data.address ||
    !data.syllabus ||
    !data.tech ||
    !data.practical ||
    !data.review ||
    !data.uname ||
    !data.mobile
  ) {
    alert("Please fill all fields");
    return;
  }

  alert("Form Submitted Successfully!");

  localStorage.setItem("institutereview", JSON.stringify(data));

  // Redirect to DisplayData page
  window.location.href = "/display";
};
  return (
    <>
    <div className="min-h-screen bg-linear-to-br from-yellow-200 to-orange-300 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl backdrop-blur-sm border border-orange-300">

        <h1 className="text-3xl font-bold text-orange-700 text-center mb-6">
          Welcome to the Institute
        </h1>

        <form className="flex flex-col gap-6">

          {/* Institute Name */}
          <div>
            <label className="font-semibold text-gray-700">Institute Name</label>
            <input
              type="text"
              name="institutename"
              value={data.institutename}
              onChange={valueschange}
              className="p-3 mt-1 w-full rounded-xl border-2 border-orange-300 focus:outline-none focus:border-orange-500 text-gray-900"
              placeholder="Enter the Name"
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold text-gray-700">Institute Address</label>
            <textarea
              rows="3"
              name="address"
              value={data.address}
              onChange={valueschange}
              className="p-3 mt-1 w-full rounded-xl border-2 border-orange-300 focus:outline-none focus:border-orange-500 text-gray-900"
            ></textarea>
          </div>

          {/* Review Section */}
          <div className="bg-orange-100 p-5 rounded-2xl shadow-inner">
            <h2 className="text-lg font-semibold text-orange-700 mb-3">Review Section</h2>

            {/* Syllabus */}
            <div className="flex justify-between items-center">
              <label className="font-semibold">Is The Syllaabus Upgraded</label>
              <div className="flex gap-3">
                <label>
                  <input
                    type="radio"
                    name="syllabus"
                    value="Yes"
                    checked={data.syllabus === "Yes"}
                    onChange={valueschange}
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="syllabus"
                    value="No"
                    checked={data.syllabus === "No"}
                    onChange={valueschange}
                  /> No
                </label>
              </div>
            </div>

            {/* Tech */}
            <div className="flex justify-between items-center">
              <label className="font-semibold">Is Recent Technologies Available</label>
              <div className="flex gap-3">
                <label>
                  <input
                    type="radio"
                    name="tech"
                    value="Yes"
                    checked={data.tech === "Yes"}
                    onChange={valueschange}
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="tech"
                    value="No"
                    checked={data.tech === "No"}
                    onChange={valueschange}
                  /> No
                </label>
              </div>
            </div>

            {/* Practical */}
            <div className="flex justify-between items-center">
              <label className="font-semibold">Is Practical Classes Available</label>
              <div className="flex gap-3">
                <label>
                  <input
                    type="radio"
                    name="practical"
                    value="Yes"
                    checked={data.practical === "Yes"}
                    onChange={valueschange}
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="practical"
                    value="No"
                    checked={data.practical === "No"}
                    onChange={valueschange}
                  /> No
                </label>
              </div>
            </div>

            {/* Review */}
            <div className="mt-3">
              <label className="font-semibold">Overall Review</label>
              <textarea
                rows="3"
                name="review"
                value={data.review}
                onChange={valueschange}
                className="p-3 mt-1 w-full rounded-xl border-2 border-orange-300 focus:outline-none focus:border-orange-500 text-gray-900"
              ></textarea>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-orange-50 p-5 rounded-2xl shadow-inner">
            <h2 className="text-lg font-semibold text-orange-700 mb-3">Personal Information</h2>

            <div>
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                name="uname"
                value={data.uname}
                onChange={valueschange}
                className="p-3 mt-1 w-full rounded-xl border-2 border-orange-300 focus:outline-none focus:border-orange-500 text-gray-900"
              />
            </div>

            <div className="mt-3">
              <label className="font-semibold">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={data.mobile}
                onChange={valueschange}
                className="p-3 mt-1 w-full rounded-xl border-2 border-orange-300 focus:outline-none focus:border-orange-500 text-gray-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="mt-4 bg-orange-500 text-white text-lg font-semibold py-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg"
            type="button"
            onClick={buttonclick}
          >
            Submit Review
          </button>
      
        </form>
      </div>
    </div>
    </>
  );
};

export default Form;
