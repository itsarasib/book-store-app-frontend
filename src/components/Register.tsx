import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type RegisterInputs = {
  email: string;
  password: string;
};

const Register = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data);

  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };

  return (
    <div className="h-[calc(100vh-120px)] border flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>

        {/* google sign in */}
        <div className=" mt-4">
          <button
            className="flex flex-wrap gap-1 items-center justify-center bg-secondary text-white px-4 py-2 w-full rounded"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
