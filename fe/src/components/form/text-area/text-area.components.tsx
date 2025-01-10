import { useController } from "react-hook-form";

export type TextAreaComponentProps = {
  name: string;
  rows: number;
  control: any;
  errMsg?: string;
  placeholder?: string;
};

const TextAreaComponent = ({
  name,
  rows,
  control,
  errMsg,
  placeholder,
}: TextAreaComponentProps) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <textarea
        placeholder={placeholder}
        {...field}
        style={{ resize: "none" }}
        rows={rows}
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <span className="text-red-800">{errMsg}</span>
    </>
  );
};

export default TextAreaComponent;
