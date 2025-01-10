import { NavLink } from "react-router-dom";

//
const FormCancelBtnComponent = ({
  submitTitle,
  loading,
}: {
  submitTitle: string;
  loading?: boolean;
}) => {
  return (
    <>
      <NavLink to="/">
        <button
          disabled={loading}
          type="reset"
          className=" disabled:cursor-not-allowed mt-8 disabled:text-slate-400 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          {submitTitle}
        </button>
      </NavLink>
    </>
  );
};

export default FormCancelBtnComponent;
