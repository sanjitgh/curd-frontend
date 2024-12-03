import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import Swal from "sweetalert2";
const ScheduleTable = ({ data, idx, scheduleData, setScheduleData }) => {
  const { _id, title, day, week, formattedTime } = data;

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you don't wan't to delete then click cancel",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/schedule/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your schedule has been deleted.",
                icon: "success"
              });
            }
            const newData = scheduleData.filter(
              (schedule) => id !== schedule._id
            );
            setScheduleData(newData);
            console.log(result);
          });
      }
    });
  };
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>{title}</td>
        <td>{week}</td>
        <td>{day}</td>
        <td>{formattedTime}</td>
        <td className="flex items-center gap-2">
          <button
            onClick={() => handelDelete(_id)}
            className="bg-red-500 rounded-sm p-2 text-xl text-white"
          >
            <MdDeleteForever />
          </button>
          <button className="bg-purple-500 rounded-sm p-2 text-xl text-white">
            <CiEdit />
          </button>
          <button className="bg-blue-500 rounded-sm p-2 text-xl text-white">
            <FaCheck />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ScheduleTable;
