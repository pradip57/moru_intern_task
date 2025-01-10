import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import moruSvc from "./home.service";

const MoruViewSinglePage = () => {
  const params = useParams();
  const [data, setData] = useState<any>();

  const detailedData = useCallback(async () => {
    const dataFetch = await moruSvc.view(params.id as string);

    setData(dataFetch.data.result);
  });

  useEffect(() => {
    detailedData();
  }, [params]);

  return (
    <>
      <div className="bg-gray-100  ">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 flex justify-center">
          <div className="shadow-lg bg-slate-300 w-[50%] p-4 rounded-lg">
            <p>Sender's Name : {data?.sender_name}</p>
            <p>Receiver's Name : {data?.receiver_name}</p>
            <p>Transaction's Date : {data?.transaction_date}</p>
            <p>Transaction's Time : {data?.transaction_time}</p>
            <p>Transaction's Amount : Rs {data?.transaction_amount}</p>
            <p>Transaction's Remarks : {data?.transaction_remarks}</p>
            <p className="overflow-hidden">
              Transaction's Screenshot : {data?.transaction_screenshot}
            </p>
          </div>
        </div>
        <NavLink className="flex justify-center" to="/">
          <button className="bg-teal-600 text-white p-2 mb-2 rounded-lg font-semibold">
            Go to Homepage
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default MoruViewSinglePage;
