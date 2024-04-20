'use client'
import React from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";


const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  num: z
    .string()
    .min(3)
    .max(20)
});
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);
  

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none text-center'>
        <h4 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
          Enter details
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className='mb-4 flex flex-col gap-6'>
            
            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500" placeholder='name'{...register("name")} />

            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 " placeholder="email" {...register("email")} />
            {errors.email && <span  className="text-red-500 text-xs">{errors.email.message}</span>}

            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 " placeholder="number phone" {...register("num")} />
            {errors.num && <span className="text-red-500 text-xs" >{errors.num.message}</span>}
          </div>



          <button className='"mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="submit">submit!</button>
        </form>
      </div>


    </div>

  )
}
