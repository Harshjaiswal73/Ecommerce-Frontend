// import React, { useState } from 'react';
import { Mail, ArrowRight, ArrowLeft, Shield } from 'lucide-react';

// const ForgotPassword = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Reset password logic here
//     console.log("Reset link requested for:", inputValue);
//   };

export default function ForgetPassword(){

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased font-sans">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12 relative overflow-hidden">
        
        <div className="absolute top-12 left-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute top-16 right-1/4 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-70"></div>
        <div className="absolute top-28 left-1/3 w-2 h-2 bg-indigo-100 rounded-full opacity-50"></div>
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-6">

            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center relative">
              <div className="w-18 h-18 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-md transform rotate-12">

                <svg className="w-8 h-8 text-white transform -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 002-2V9a2 2 0 00-2-2h-1M12 11V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                ?
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">
            Forgot Password?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md px-2">
            No worries! Enter your registered mobile number or email address and we'll send you instructions to reset your password.
          </p>
        </div>

   
        <form  className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2 tracking-wide">
              Email Address or Mobile Number
            </label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400 stroke-[1.5]" />
              </div>
              <input
                type="text"
                required
                // value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your email or mobile number"
                className="block w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 px-4 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 text-sm group"
          >
            <span>Send Otp</span>
          </button>
        </form>
        <div className="mt-8 text-center">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <span className="relative px-3 bg-white text-xs text-slate-400 uppercase tracking-widest font-medium">
              OR
            </span>
          </div>

          <button className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group">
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-slate-500">
        Remember your password?{' '}
        <a href="/user/login" className="font-semibold text-indigo-600 hover:underline">
          Login here
        </a>
      </div>
    </div>
  );
}