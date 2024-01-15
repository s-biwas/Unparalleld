"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 min-h-[95vh] items-center">
      {/* Picture Column */}
      <div className="relative h-full">
        <Image
          src="https://cdn-images.farfetch-contents.com/18/70/98/91/18709891_41030295_800.jpg"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      </div>

      {/* Form Column */}
      <div className="flex flex-col justify-center items-center ">
        <form className="p-8 max-w-md rounded-lg shadow-sm shadow-gray-400 h-full bg-white border border-gray border-solid border-1">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.email}
            onChange={handleChange}
          />

          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.password}
            onChange={handleChange}
          />

          <Button type="submit">Login</Button>
        </form>
        <span className="mt-2 text-white">
          No account?
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
