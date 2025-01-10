export type FormLabelComponent = {
  htmlFor: string;
  label: string;
  compulsory?:boolean
}


const FormLabelComponent = ({
  htmlFor,
  label,
  compulsory = false
}: FormLabelComponent) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-md font-medium text-gray-700"
      >
        {label} {compulsory?<span className="text-red-800">*</span>:<></>}
      </label>
    </>
  );
};

export default FormLabelComponent;
