//
const FormSubmitBtnComponent = ({
  submitTitle,
  loading,
}: {
  submitTitle: string;
  loading?: boolean;
 
}) => {
  return (
    <>
      <button
        disabled={loading}
        type="submit"
        className="disabled:cursor-not-allowed mt-8 disabled:text-slate-400 w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        {submitTitle}
      </button>
    </>
  );
};

export default FormSubmitBtnComponent;
