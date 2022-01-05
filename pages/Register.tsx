import { useState, useContext, useRef, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Register() {
  // const initialState = { name: "", email: "", password: "", cf_password: "" };
  // const [userData, setUserData] = useState(initialState);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailRef.current.value + " " + passwordRef.current.value);
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError("Failed to create an account.");
      console.log(e.message);
    }

    //database
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      console.log("currently logged in as " + currentUser.email);
    }
  }, [router, currentUser]);

  return (
    <div className="w-full p-10 lg:w-3/6 lg:mx-auto lg:max-w-2xl items-center justify-center">
      {/* <div>{JSON.stringify(currentUser)}</div> */}
      <div></div>
      <div className="block border border-gray-200 shadow-md">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <div className="text-xl mb-5">Sign up for your account</div>
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="firstname"
              id="firstname"
              ref={firstNameRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Alex"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="lastname"
              id="lastname"
              ref={lastNameRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pose"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="alex@pose.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
