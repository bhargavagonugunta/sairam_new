import sairamlogo from "../../../assets/images/sairamlogo.png";
import cross from "../../../assets/images/cross.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  Name: z.string().min(3).nonempty(),
  number: z.string().min(10),
  flataddress: z.string().nonempty(),
  streetaddress: z.string().nonempty(),
  village: z.string().nonempty(),
  pincode: z.string().min(6).nonempty(),
  state: z.enum(["choose", "ap", "ts"]),
  country: z.enum(["choose", "India"]),
});

type FormValues = z.infer<typeof schema>;


function AddDeliveryPage({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
 

  return (
    <div className="main_head relative py-2 bg-white w-5/6 mx-auto md:w-3/6">
      <div className="flex justify-center p-2">
        <img src={sairamlogo} className="w-3/6 md:w-1/6" alt="Sairam Logo" />
      </div>
      <div className="absolute top-2 right-2">
        <button onClick={onClose} className="">
          <img src={cross} className="w-4 md:w-8" alt="Close" />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center p-4 md:p-0">
        <div className=" flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-medium underline underline-offset-4">
              Enter a New Address:
            </h1>
          </div>

          <div className="flex flex-col  md:p-0 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full relative gap-6"
            >
              <div className="flex gap-4" >
              <div className="relative">
                <div className="">
                  <input
                    {...register("Name")}
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                  />
                </div>
                {errors.Name && (
                  <p className="text-red-500 absolute">{errors.Name?.message}</p>
                )}
              </div>
              <div className="relative">
                <div className="">
                  <input
                    {...register("number")}
                    type="text"
                    name="number"
                    placeholder="Mobile No"
                    className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                  />
                </div>
                {errors.number && (
                  <p className="text-red-500 absolute">{errors.number.message}</p>
                )}
              </div>
              </div>
              <div className="flex gap-4 ">
              <div className="relative">
                <input
                  {...register("flataddress")}
                  type="text"
                  name="flataddress"
                  placeholder="Flat No"
                  className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                />
                {errors.flataddress && <p className="text-red-500 absolute">{errors.flataddress.message}</p>}
              </div>

              <div className="relative">
                <input
                  {...register("streetaddress")}
                  type="text"
                  name="streetaddress"
                  placeholder="Streetaddress"
                  className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                />
                {errors.streetaddress && <p className="text-red-500 absolute">{errors.streetaddress.message}</p>}
              </div>
              </div>
              <div className="flex gap-4">
              <div className="relative">
                <input
                  {...register("village")}
                  type="text"
                  name="village"
                  placeholder="Village"
                  className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                />
                {errors.village && <p className="text-red-500 absolute">{errors.village.message}</p>}
              </div>

              <div className="relative">
                <input
                  {...register("pincode")}
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  className="border border-slate-500 outline-none p-2 rounded-lg w-full"
                />
                {errors.pincode && <p className="text-red-500 absolute">{errors.pincode.message}</p>}
              </div>
              </div>
              <div className="flex gap-4">
              <select
  {...register("state")}
  name="state"
  className="border border-slate-500 outline-none p-2 rounded-lg w-3/6"
>
  <option value="choose">State</option>
  <option value="ap">Andhra Pradesh</option>
  <option value="ts">Telangana</option>
</select>
{errors.state && <p className="text-red-500 absolute mt-1">{errors.state.message}</p>}

<select
  {...register("country")}
  name="country"
  className="border border-slate-500 outline-none p-2 rounded-lg w-3/6"
>
  <option value="choose">Country</option>
  <option value="India">India</option>
</select>
{errors.country && <p className="text-red-500 absolute mt-1">{errors.country.message}</p>}

</div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <label className="text-xl font-normal">
                    Save this as default address
                  </label>
                </div>
                
                <button
                  onClick={onClose}
                  className="bg-[#fca120] p-2 rounded-lg border border-slate-800 mx-auto"
                >
                  Add Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDeliveryPage;
