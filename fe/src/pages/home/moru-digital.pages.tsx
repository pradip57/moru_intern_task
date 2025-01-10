import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TableSkeleton from "../../components/table-skeleton/table-skeleton.components";
import moruSvc from "./home.service";
import { toast } from "react-toastify";

import FormActionComponents from "../../components/form/actions/form-actions.components";

const MoruDigitalPage = () => {
  const [loading, setLoading] = useState(true);
  const [transactionData, setTransactionData] = useState<any>();

  const deleteTransaction = async (id: string) => {
    try {
      setLoading(true);
      await moruSvc.delete(id);
      toast.success("Transaction Deleted Successfully.");
      setLoading(false);
    } catch (exception) {
      console.log(exception);
      toast.error("Error deleting Transaction");
    } finally {
      loadTransaction();
    }
  };

  const viewDetail = async (id: string) => {
    try {
      await moruSvc.view(id);
    } catch (exception) {
      toast.error("Transaction's Details cannot fetched");
    }
  };

  const loadTransaction = useCallback(async () => {
    setLoading(true);
    try {
      const response = await moruSvc.listAllData();
      setTransactionData(response.data.result);

      setLoading(false);
    } catch (exception: any) {
      toast.error("Transactions Cannot be fetched");
    }
  }, []);

  useEffect(() => {
    loadTransaction();
  }, []);
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <NavLink to="create">
          <button
            type="button"
            className="flex gap-2 items-center mb-4 p-1 px-2 rounded-md text-white  text-red bg-teal-700 ml-auto "
          >
            <FaPlus />
            Add Transaction's Details
          </button>
        </NavLink>

        <div className="overflow-x-auto h-96">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right bg-gray-800">
              <tr>
                <th className="text-white whitespace-nowrap px-4 py-2 font-medium ">
                  Sender's Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Receiver's Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Amount
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Transaction's Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                  Transaction's Time
                </th>
                <th className="px-4 py-2 text-white">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <>
                  <TableSkeleton rows={4} column={6} />
                </>
              ) : (
                <>
                  {" "}
                  {transactionData && transactionData.length ? (
                    <>
                      {transactionData.map((row: any, index: any) => (
                        <tr key={index}>
                          <td className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {row.sender_name}
                          </td>
                          <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                            {row.receiver_name}
                          </td>
                          <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                            {row.transaction_amount}
                          </td>
                          <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                            {row.transaction_date}
                          </td>
                          <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                            {row.transaction_time}
                          </td>
                          <FormActionComponents
                            editUrl={`/${row._id}/edit`}
                            viewUrl={`/${row._id}`}
                            id={row._id}
                            deleteTrans={deleteTransaction}
                            viewTrans={viewDetail}
                          />
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td
                          className=" text-center whitespace-nowrap px-4 py-4 bg-gray-100 text-xl font-medium text-gray-900"
                          colSpan={6}
                        >
                          No data found
                        </td>
                      </tr>
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MoruDigitalPage;
