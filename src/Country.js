import React from "react";

function Country() {
  return (
    <div className="Country grid grid-cols-4 gap-3 mt-9">
      <div className="country-info h-80 w-56 rounded shadow-sm bg-white">
        <div className="bg-red-100 h-2/5"> Flag</div>
        <div className="bg-red-300 h-2/5 mx-4 my-6">
          <h4 className="font-medium"> Country</h4>
          <ul className="text-sm font-normal mt-1">
            {" "}
            <li>Population:</li>
            <li>Region:</li>
            <li>Capital:</li>
          </ul>
        </div>
      </div>
      <div className="country-info h-80 w-56 rounded shadow-sm bg-white">
        <div className="bg-red-100 h-2/5"> Flag</div>
        <div className="bg-red-300 h-2/5 mx-4 my-6">
          <h4 className="font-medium"> Country</h4>
          <ul className="text-sm font-normal mt-1">
            {" "}
            <li>Population:</li>
            <li>Region:</li>
            <li>Capital:</li>
          </ul>
        </div>
      </div>
      <div className="country-info h-80 w-56 rounded shadow-sm bg-white">
        <div className="bg-red-100 h-2/5"> Flag</div>
        <div className="bg-red-300 h-2/5 mx-4 my-6">
          <h4 className="font-medium"> Country</h4>
          <ul className="text-sm font-normal mt-1">
            {" "}
            <li>Population:</li>
            <li>Region:</li>
            <li>Capital:</li>
          </ul>
        </div>
      </div>
      <div className="country-info h-80 w-56 rounded shadow-sm bg-white">
        <div className="bg-red-100 h-2/5"> Flag</div>
        <div className="bg-red-300 h-2/5 mx-4 my-6">
          <h4 className="font-medium"> Country</h4>
          <ul className="text-sm font-normal mt-1">
            {" "}
            <li>Population:</li>
            <li>Region:</li>
            <li>Capital:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Country;
