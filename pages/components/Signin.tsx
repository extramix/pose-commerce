// import { useRouter } from "next/router";
// import React, { FormEvent, useEffect, useRef, useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";

// //FIXME: Fix product not load on [productId]
// //FIXME: Add to Cart Functionality

// //TODO: Design a sign-in,login page. Could be just a modal for a good UX
// //TODO: Design a checkout page **Payment function related

// //TODO: Authentication using Firebase **LERAN FIREBASE AUTH
// //TODO: Serves different carts for each user
// //TODO: BONUS-> Payment functionallity. Maybe Paypal or Stripe

// //TODO: add size selection
// //TODO: Re-design the product cards

// export default function Signin() {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const { signin, currentUser } = useAuth();
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(emailRef.current.value + " " + passwordRef.current.value);
//     try {
//       setError("");
//       await signin(emailRef.current.value, passwordRef.current.value);
//     } catch (e) {
//       setError("Failed to create an account.");
//       console.log(e.message);
//     }
//   };

//   useEffect(() => {
//     if (currentUser) {
//       router.push("/");
//       console.log("currently logged in as " + currentUser.email);
//     }
//   }, [router, currentUser]);

//   return (
//     <>
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
//         <div className="w-full p-10 lg:w-3/6 lg:mx-auto lg:max-w-2xl md:mx-auto md:max-w-xl items-center justify-center">
//           <div></div>
//           <div className="block border border-gray-200 shadow-md">
//             <form onSubmit={handleSubmit} className="p-8">
//               <div className="text-xl mb-5">Sign in to our website</div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 "
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   ref={emailRef}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                   placeholder="alex@pose.com"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   ref={passwordRef}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//                   required
//                 />
//               </div>

//               <div className="flex items-start mb-6">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="remember"
//                     aria-describedby="remember"
//                     type="checkbox"
//                     className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label
//                     htmlFor="remember"
//                     className="font-medium text-gray-900"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </>
//   );
// }
