import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSchedule = () => {
  const data = useLoaderData();
  const { _id, title, day, week, formattedTime } = data;
  const handelUpdate = (e) => {
    e.preventDefault();

    // time formet in 12 hours
    const convertTo12HourFormat = (time) => {
      const [hours, minutes] = time.split(":");
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes} ${period}`;
    };

    const form = e.target;
    const title = form.title.value;
    const day = form.day.value;
    const week = form.week.value;
    const time = form.time.value;
    const formattedTime = convertTo12HourFormat(time);

    const data = { title, day, week, formattedTime };
    fetch(`http://localhost:5000/schedule/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Your information is updated now!",
            icon: "success",
          });
        }
        else{
            Swal.fire({
                title: "Are your Sure?",
                text: "You don't update any field",
                icon: "question"
              });
        }
      });
  };

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto px-3 py-14">
        <h1 className="text-3xl text-center mb-8 font-semibold">
          Update Schedule
        </h1>

        {/* form */}

        <form
          onSubmit={handelUpdate}
          className="grid md:grid-cols-2 grid-cols-1 gap-5"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base">Title</span>
            </div>
            <input
              name="title"
              type="text"
              defaultValue={title}
              placeholder="Title"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base">Day</span>
            </div>
            <input
              name="day"
              defaultValue={day}
              type="date"
              placeholder="Day"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base">Weekend Day</span>
            </div>
            <select
              name="week"
              defaultValue={week}
              className="select select-bordered w-full"
            >
              <option>Saturday</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base">Time</span>
            </div>
            <input
              name="time"
              defaultValue={formattedTime}
              type="time"
              className="input input-bordered w-full"
              required
            />
          </label>
          <div className="w-full col-span-2">
            <input
              className="btn bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSchedule;
