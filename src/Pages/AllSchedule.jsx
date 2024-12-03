import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ScheduleTable from "../component/ScheduleTable";

const AllSchedule = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");

  const [scheduleData, setScheduleData] = useState(data);

  useEffect(() => {
    fetch(`https://gym-ruby-ten.vercel.app/schedule?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setScheduleData(data);
      });
  }, [search]);

  return (
    <div className="container mx-auto px-3 py-14">
      <div className="text-center mb-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Secrch"
          className="input input-bordered w-[300px] mx-auto"
        />
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr className="text-base">
              <th>Serial No</th>
              <th>Title</th>
              <th>Day</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.length === 0 ? (
              <tr className="border-none pt-10">
                <td colSpan={6}>
                  <p className="text-2xl font-medium text-blue-500 text-center border-none">
                    Data Not found.
                  </p>
                </td>
              </tr>
            ) : (
              scheduleData.map((data, idx) => (
                <ScheduleTable
                  key={data?._id}
                  data={data}
                  idx={idx}
                  scheduleData={scheduleData}
                  setScheduleData={setScheduleData}
                ></ScheduleTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSchedule;
