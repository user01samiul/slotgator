// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import { useActionState, useState } from "react";
// import { CgSpinnerTwoAlt } from "react-icons/cg";
// import { FaExclamationCircle, FaCheck } from "react-icons/fa";
// import { FiAlertCircle } from "react-icons/fi";
// import { userRegister } from "@/actions/userRegister";

// export const RegisterClient = () => {
//   const [state, formAction, isPending] = useActionState(userRegister, undefined);
//   const [password, setPassword] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // Password requirements
//   const hasMinLength = password.length >= 6;
//   const hasLetter = /[a-zA-Z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const isPasswordValid = hasMinLength && hasLetter && hasNumber;

//   // Show modal on successful registration
//   if (state?.success === true && !showModal) {
//     setShowModal(true);
//   }

//   const RequirementItem = ({ 
//     condition, 
//     label 
//   }: { 
//     condition: boolean; 
//     label: string 
//   }) => (
//     <li className="flex items-start gap-2">
//       {condition ? (
//         <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
//       ) : (
//         <FiAlertCircle className="text-gray-400 mt-0.5 flex-shrink-0" size={14} />
//       )}
//       <span className={`text-sm ${condition ? 'text-green-600' : 'text-gray-500'}`}>
//         {label}
//       </span>
//     </li>
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
//       <div className="z-2010 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Create an Account
//           </h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
//             Register to get started
//           </p>
//         </div>

//         {/* General error message */}
//         {state?.message && !state.success && !state.errors && (
//           <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-md p-3 flex items-center gap-2 text-red-600 dark:text-red-300 text-sm">
//             <FaExclamationCircle />
//             <span>{state.message}</span>
//           </div>
//         )}

//         <form className="space-y-6" action={formAction}>
//           <div>
//             <Label
//               htmlFor="firstName"
//               className="text-sm font-medium text-gray-700 dark:text-gray-200"
//             >
//               First Name
//             </Label>
//             <Input
//               id="firstName"
//               name="firstName"
//               type="text"
//               placeholder="Tyler"
//               className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             {state?.errors?.firstName && (
//               <div className="mt-1 flex items-center gap-1 text-red-600 dark:text-red-300 text-sm">
//                 <FaExclamationCircle />
//                 <span>{state.errors.firstName[0]}</span>
//               </div>
//             )}
//           </div>

//           <div>
//             <Label
//               htmlFor="lastName"
//               className="text-sm font-medium text-gray-700 dark:text-gray-200"
//             >
//               Last Name
//             </Label>
//             <Input
//               id="lastName"
//               name="lastName"
//               type="text"
//               placeholder="Durden"
//               className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             {state?.errors?.lastName && (
//               <div className="mt-1 flex items-center gap-1 text-red-600 dark:text-red-300 text-sm">
//                 <FaExclamationCircle />
//                 <span>{state.errors.lastName[0]}</span>
//               </div>
//             )}
//           </div>

//           <div>
//             <Label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700 dark:text-gray-200"
//             >
//               Email Address
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="user01@gmail.com"
//               className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             {state?.errors?.email && (
//               <div className="mt-1 flex items-center gap-1 text-red-600 dark:text-red-300 text-sm">
//                 <FaExclamationCircle />
//                 <span>{state.errors.email[0]}</span>
//               </div>
//             )}
//           </div>

//           <div>
//             <Label
//               htmlFor="password"
//               className="text-sm font-medium text-gray-700 dark:text-gray-200"
//             >
//               Password
//             </Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
//               <ul className="space-y-2">
//                 <RequirementItem 
//                   condition={hasMinLength} 
//                   label="At least 6 characters" 
//                 />
//                 <RequirementItem 
//                   condition={hasLetter} 
//                   label="Contains at least one letter" 
//                 />
//                 <RequirementItem 
//                   condition={hasNumber} 
//                   label="Contains at least one number" 
//                 />
//               </ul>
//               {password.length > 0 && (
//                 <p className={`mt-2 text-xs font-medium ${isPasswordValid ? 'text-green-600' : 'text-gray-500'}`}>
//                   {isPasswordValid 
//                     ? 'Password meets all requirements' 
//                     : 'Complete all requirements'}
//                 </p>
//               )}
//             </div>
//             {state?.errors?.password && (
//               <div className="mt-1 text-red-600 dark:text-red-300 text-sm">
//                 <ul className="list-disc list-inside">
//                   {state.errors.password.map((error) => (
//                     <li key={error} className="flex items-center gap-1">
//                       <FaExclamationCircle />
//                       {error}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isPending || (password.length > 0 && !isPasswordValid)}
//             className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-md py-2 px-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isPending ? (
//               <CgSpinnerTwoAlt className="animate-spin text-lg" />
//             ) : (
//               "Register"
//             )}
//           </button>

//           <p className="text-center text-sm text-gray-600 dark:text-gray-300">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="text-indigo-600 dark:text-indigo-400 hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="z-2100 fixed inset-0 flex items-center justify-center bg-black/50 ">
//           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
//             <div className="flex items-center gap-2 text-green-600 dark:text-green-300 text-sm mb-4">
//               <span>✅</span>
//               <span className="text-lg font-semibold">
//                 Registration Successful!
//               </span>
//             </div>
//             <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
//               Your account has been created. Go to the{" "}
//               <Link
//                 href="/login"
//                 className="text-indigo-600 dark:text-indigo-400 hover:underline"
//               >
//                 login
//               </Link>{" "}
//               page to continue.
//             </p>
//             <Link
//               href="/login"
//               className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-md py-2 px-4 transition-colors duration-200"
//             >
//               Go to Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };