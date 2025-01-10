import { useForm } from "react-hook-form";
import FormInputComponent, {
  InputTypeEnum,
} from "../../components/form/input/form-input.components";
import FormLabelComponent from "../../components/form/label/form-label.components";
import FormSubmitBtnComponent from "../../components/form/submit-button/form-submit-btn.components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormCancelBtnComponent from "../../components/form/cancel-button/form-cancel-btn.components";
import FileInputComponent from "../../components/form/file-input/file-input.components";
import moruSvc from "./home.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export type TransactionDataType = {
  sender_name: string;
  receiver_name: string;
  transaction_date: string;
  transaction_time: string;
  transaction_amount: string;
  transaction_remarks: string;
};

const MoruDigitalCreatePage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const transactionDTO = Yup.object({
    sender_name: Yup.string().required().min(4),
    receiver_name: Yup.string().required().min(4),
    transaction_date: Yup.string().required(),
    transaction_time: Yup.string().required(),
    transaction_amount: Yup.string().required(),
    transaction_remarks: Yup.string().required(),
  });
  const {
    control,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm({ resolver: yupResolver(transactionDTO) });
  const submitEvent = async (data: TransactionDataType) => {
    try {
      setLoading(true);
      data = { ...data };

      console.log(data);

      await moruSvc.create(data);
      toast.success("Transaction's Details added Successfully.");
      navigate("/");
    } catch (exception) {
      toast.error("Error adding Transaction's Details");
      console.log(exception);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Transaction's Details
          </h2>
          <form onSubmit={handleSubmit(submitEvent)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <FormLabelComponent
                  htmlFor="sender_name"
                  label="Sender's Name"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.TEXT}
                  name="sender_name"
                  placeholder="Type Sender's Name"
                  control={control}
                  errMsg={errors?.sender_name?.message as string}
                />
              </div>
              <div className="sm:col-span-2">
                <FormLabelComponent
                  htmlFor="receiver_name"
                  label="Receiver's Name"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.TEXT}
                  name="receiver_name"
                  placeholder="Type Receiver's Name"
                  control={control}
                  errMsg={errors?.receiver_name?.message as string}
                />
              </div>

              <div className="w-full">
                <FormLabelComponent
                  htmlFor="transaction_date"
                  label="Transaction's Date"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.DATE}
                  name="transaction_date"
                  placeholder="Type Transaction's Date"
                  control={control}
                  errMsg={errors?.transaction_date?.message as string}
                />
              </div>
              <div className="w-full">
                <FormLabelComponent
                  htmlFor="transaction_time"
                  label="Transaction's Time"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.TIME}
                  name="transaction_time"
                  placeholder="Type Transaction's Time"
                  control={control}
                  errMsg={errors?.transaction_time?.message as string}
                />
              </div>
              <div className="w-full">
                <FormLabelComponent
                  htmlFor="transaction_amount"
                  label="Transaction's Amount"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.TEXT}
                  name="transaction_amount"
                  placeholder="Type Transaction's Amount"
                  control={control}
                  errMsg={errors?.transaction_amount?.message as string}
                />
              </div>

              <div className="sm:col-span-2">
                <FormLabelComponent
                  htmlFor="transaction_remarks"
                  label="Transactions's Remarks"
                  compulsory={true}
                />
                <FormInputComponent
                  type={InputTypeEnum.TEXT}
                  name="transaction_remarks"
                  placeholder="Type Transaction's Remarks"
                  control={control}
                  errMsg={errors?.transaction_remarks?.message as string}
                />
              </div>
              <div className="sm:col-span-2">
                <FormLabelComponent
                  htmlFor="transaction_screenshot"
                  label="Transactions's Screenshot"
                  compulsory={true}
                />
                <FileInputComponent
                  name="transaction_screenshot"
                  setValue={setValue}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <FormCancelBtnComponent submitTitle="Cancel" />
              <FormSubmitBtnComponent submitTitle="Submit" loading={loading} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MoruDigitalCreatePage;
