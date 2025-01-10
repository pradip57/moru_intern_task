import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const FormActionComponents = ({
  id,
  deleteTrans,
  editUrl,
  viewUrl,
  viewTrans,
}: {
  id: string;
  deleteTrans: Function;
  editUrl: string;
  viewUrl: string;
  viewTrans: Function;
}) => {
  const handleView = async () => {
    try {
      viewTrans(id);
      toast.success("Transaction's Details Viewed Succesfully");
    } catch (exception) {
      toast.error("Transaction's Detailed cannot fetched");
    }
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          deleteTrans(id);
        }
      });
    } catch (exception) {
      toast.error("Transaction cannot be Deleted");
    }
  };
  return (
    <>
      <td className="text-center whitespace-nowrap px-4 py-2">
        <NavLink
          onClick={handleView}
          to={viewUrl}
          className="inline-block rounded mx-1 bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          <FaEye className="text-[15px]" />
        </NavLink>
        <NavLink
          to={editUrl}
          className="inline-block rounded mx-1 bg-teal-600 px-4 py-2 text-xs font-medium text-white hover:bg-teal-700"
        >
          <FaEdit className="text-[15px]" />
        </NavLink>
        <a
          onClick={handleDelete}
          href="#"
          className="inline-block rounded mx-1 bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
        >
          <FaTrash className="text-[15px]" />
        </a>
      </td>
    </>
  );
};

export default FormActionComponents;
