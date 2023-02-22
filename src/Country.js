import React from "react";


function Country({countries}) {
  return (
      //display all countries on the homepage
    <div>
      <div className="Country grid grid-cols-4 gap-3 mt-9">
        {countries?.map((country, index) => {
          const { name, population, region, capital, flags } = country;
          return (
            <div
              key={index}
              className="country-info h-80 w-56 rounded shadow-sm bg-white mb-10"
            >
              <div className="h-3/6">
                <img src={flags.png} alt={name} />
              </div>
              <div className="h-2/5 mx-4 my-6">
                <h4 className="font-semibold"> {name}</h4>
                <ul className="text-sm font-medium mt-1">
                  {" "}
                  <li>Population: {population} </li>
                  <li>Region: {region}</li>
                  <li>Capital: {capital}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
