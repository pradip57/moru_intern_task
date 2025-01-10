import { useController } from "react-hook-form";

export enum InputTypeEnum {
  TEXT = "text",
  PASSWORD = "password",
  TEL = "tel",
  DATE = "date",
  TIME = "time"
}

export type FormInputComponentProps = {
  type: InputTypeEnum;
  name: string;
  defaultValue?: any;
  placeholder: string;
  control: any;
  errMsg?: string | null | undefined;
};

const FormInputComponent = ({
  type,
  name,
  placeholder,
  control,
  errMsg,
  defaultValue = "",
}: FormInputComponentProps) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: defaultValue,
  });
  return (
    <>
      <input
        {...field}
        type={type}
        className="mt-1 p-2 bg-gray-50 border border-gray-300  text-gray-900 rounded-lg block w-full"
        placeholder={placeholder}
      />
      <span className="text-red-800">{errMsg}</span>
    </>
  );
};

export default FormInputComponent;
