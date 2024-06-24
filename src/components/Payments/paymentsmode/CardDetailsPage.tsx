import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cross from "../../../assets/images/cross.png";

const schema = z.object({
  cardnumber: z.string().min(16).regex(/^\d+$/),
  name: z.string().min(5),
  expirydate: z.string(),
});

type FormValues = z.infer<typeof schema>;

function CardDetails({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className=" md:p-0  mx-auto bg-white">
      <div className="w-full flex justify-between items-center bg-[#e1e1e1] p-2">
        <h1 className="text-xl font-medium">Enter Card Details</h1>
        <div>
          <button onClick={onClose}>
            <img src={cross} alt="cross" className="w-8" />
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-8 p-4">
          <div className="relative">
            <label htmlFor="cardnumber" className="text-xl font-medium">
              Card No:
            </label>
            <input
              {...register("cardnumber")}
              type="text"
              name="cardnumber"
              className="bg-[#e1e1e1] rounded-full outline-none p-2"
            />
            {errors.cardnumber && (
              <p className="text-red-500 ml-8 text-xs absolute">{errors.cardnumber.message}</p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="name" className="text-xl font-medium">
              Name:
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              className="bg-[#e1e1e1] rounded-full outline-none p-2"
            />
            {errors.name && <p className="text-red-500 ml-8 text-xs absolute">{errors.name.message}</p>}
          </div>
          <div className="relative">
            <label htmlFor="expirydate" className="text-xl font-medium">
              Expiry Date:
            </label>
            <input
              {...register("expirydate")}
              type="month"
              name="expirydate"
              className="bg-[#e1e1e1] rounded-full outline-none p-2"
            />
            {errors.expirydate && (
              <p className="text-red-500 ml-8 text-xs absolute">{errors.expirydate.message}</p>
            )}
          </div>
        </div>

        <div className="bg-[#e1e1e1] flex justify-center gap-4 p-2">
          <button className="p-2 border border-slate-700 rounded-full bg-white" onClick={onClose}>
            cancel
          </button>
          <button
            type="submit"
            className="p-2 rounded-full bg-[#fca120] border border-slate-700"
          >
            Submit Card Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardDetails;
