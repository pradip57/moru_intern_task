import { useEffect, useState } from "react";
//import img from  "../../../../../api/public/uploads/screenshots"
export type FileInputComponentProps = {
  name: string;
  setValue: any;
  multiple?: boolean;
  thumbnail?: any;
};

const FileInputComponent = ({
  name,
  setValue,
  multiple = false,
  thumbnail = null,
}: FileInputComponentProps) => {
  const [thumb, setThumb] = useState<any>();

  const handleChange = (e: any) => {
    if (multiple) {
      setValue(name, Object.values(e.target.files));
      setThumb(Object.values(e.target.files));
    } else {
      setValue(name, e.target.files[0]);
      setThumb(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (thumbnail) {
      setThumb(thumbnail);
    }
  }, [thumbnail]);
  return (
    <>
      <div className="flex gap-2">
        <div className={`${multiple ? "w-full" : "w-3/4"}`}>
          <input
            onChange={handleChange}
            multiple={multiple}
            type="file"
            className={`mt-1 block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
          />
        </div>
        {!multiple ? (
          <div className="w-1/4 mt-[-25px]">
            {thumb && typeof thumb === "object" ? (
              <>
                <img
                  src={URL.createObjectURL(thumb)}
                  className="rounded-none w-24 h-24"
                />
              </>
            ) : (
              <>
                {thumb && typeof thumb === "string" ? (
                  <>
                    <img
                      src="https://placehold.co/96x96?text=Old Image"
                      className="rounded-none w-24 h-24"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="https://placehold.co/96x96?text=No Image"
                      className="rounded-none"
                    />
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex">
        {multiple && thumb && Array.isArray(thumb) ? (
          <>
            {thumb.map((image: any, i: number) => (
              <div className="w-1/4 ms-3 mt-3" key={i}>
                <img
                  src={URL.createObjectURL(image)}
                  className="rounded-none w-24 h-24"
                />
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FileInputComponent;
