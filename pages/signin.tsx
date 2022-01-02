import React from "react";

//FIXME: Fix product not load on [productId]
//FIXME: Add to Cart Functionality

//TODO: Design a sign-in,login page. Could be just a modal for a good UX
//TODO: Design a checkout page **Payment function related

//TODO: Authentication using Firebase **LERAN FIREBASE AUTH
//TODO: Serves different carts for each user
//TODO: BONUS-> Payment functionallity. Maybe Paypal or Stripe

//TODO: add size selection
//TODO: Re-design the product cards

export default function Signin() {
  return (
    <div className="grid grid-cols-3">
      <div></div>
      <div className="block border border-gray-200 shadow-md">
        <form className="p-8">
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
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Sign In
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
