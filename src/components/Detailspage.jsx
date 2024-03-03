import React, { useEffect, useState } from "react";
import Box from "./Box";
import { IoSearchSharp } from "react-icons/io5";
import Loader from "./Loader";

function Detailspage() {
  const [pincode, setPincode] = useState("");
  const [data, setData] = useState(null);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const savedPincode = localStorage.getItem("pincode");
    setPincode(savedPincode);
    if (savedPincode) {
      fetch(`${import.meta.env.VITE_POSTOFFICE_SEARCH_API}/${savedPincode}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data[0]);
        })
        .catch((error) => {
          console.error("Error fetching pincode data:", error);
        });
    }
  }, []);

  if (!data) return <Loader />;

  const filteredPostOffices = data.PostOffice.filter((postOffice) =>
    postOffice.Name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="h-screen w-full bg-gray-200 flex flex-col items-start p-4 gap-3">
      <h1 className="text-2xl font-bold">Pincode: {pincode}</h1>
      <h2 className="text-2xl font-bold">
        Message:{" "}
        <span className="text-2xl font-normal capitalize">{data.Message}</span>
      </h2>

      <div className="flex w-full border-2 rounded-md border-black">
        <div className="flex w-10 cursor-pointer items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
          <IoSearchSharp
            size={20}
            className="pointer-events-none absolute transition"
          />
        </div>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full bg-white pl-2 text-base font-semibold outline-0"
          placeholder="Filter"
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        {filteredPostOffices.map((postOffice, index) => (
          <Box key={index} data={postOffice} />
        ))}
      </div>
    </div>
  );
}

export default Detailspage;
