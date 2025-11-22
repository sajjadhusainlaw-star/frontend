// "use client";

// import { useState } from "react";

// interface PlanDetails {
//   planName: string;
//   priceMonthly: number;
//   priceYearly: number;
//   priceYearlyDiscounted: number;
//   discountPercent: number;
//   features: string[];
//   billing: string;
// }

// export default function ChoosedPlan({ planDetails }: { planDetails: PlanDetails }) {
//   const [billingFrequency, setBillingFrequency] = useState(planDetails.billing);

//   const {
//     planName,
//     priceMonthly,
//     priceYearly,
//     priceYearlyDiscounted,
//     discountPercent,
//     features,
//   } = planDetails;

//   const GST_RATE = 0.18;

//   let basePrice = 0;
//   let discountAmount = 0;
//   let originalPrice = 0;

//   if (billingFrequency === "YEARLY") {
//     basePrice = priceYearlyDiscounted;
//     originalPrice = priceYearly;
//     discountAmount = originalPrice - basePrice;
//   } else {
//     basePrice = priceMonthly;
//     originalPrice = priceMonthly;
//     discountAmount = 0;
//   }

//   const gstAmount = basePrice * GST_RATE;
//   const grandTotal = basePrice + gstAmount;

//   const priceDisplay = basePrice.toFixed(2);
//   const gstDisplay = gstAmount.toFixed(2);
//   const discountDisplay = discountAmount.toFixed(2);
//   const totalDisplay = grandTotal.toFixed(2);

//   const currentPlanPrice =
//     billingFrequency === "MONTHLY" ? priceMonthly : priceYearlyDiscounted;

//   const planCardColors =
//     planName === "Jurist Pro"
//       ? "from-[#503598] to-[#122340]"
//       : "from-[#9747FF] to-[#1959A8]";

//   return (
//     <div className="min-h-screen bg-white flex justify-center items-stretch py-0 font-sans">
//       <div className="flex w-full max-w-7xl shadow-xl">

//         {/* LEFT SIDE */}
//         <div className="w-2/5 bg-[#122340] p-16 flex flex-col justify-start items-center text-white">
//           <h2 className="text-xl font-medium mb-12">Your chosen plan</h2>

//           <div
//             className={`bg-gradient-to-br ${planCardColors} rounded-xl w-full max-w-xs p-8 flex flex-col items-start`}
//           >
//             <div className="text-right w-full mb-4">
//               <span className="bg-white text-[#2D0FD4] text-xs font-semibold rounded-full px-3 py-1.5 uppercase">
//                 MOST POPULAR
//               </span>
//             </div>

//             <h3 className="text-3xl font-bold mb-1">{planName}</h3>
//             <p className="text-5xl font-extrabold mb-1">₹{currentPlanPrice}</p>
//             <p className="text-sm text-white/70 mb-6">
//               /month
//               <span className="text-xs text-white/50 block">
//                 billed {billingFrequency === "MONTHLY" ? "monthly" : "yearly"}
//               </span>
//             </p>

//             <ul className="space-y-3 mb-10 text-sm w-full text-left">
//               {features.map((item, i) => (
//                 <li key={i} className="flex items-center">
//                   <span className="w-5 h-5 mr-3 rounded-full bg-white flex items-center justify-center text-[#122340] text-xs font-bold">
//                     ✓
//                   </span>
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <button className="bg-white hover:bg-gray-100 transition-colors duration-300 text-[#2D0FD4] font-semibold rounded-full w-full py-3 px-6">
//               Choose Plan
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-3/5 p-16 bg-white space-y-10">

//           {/* Billing Frequency */}
//           <div className="border-b pb-8">
//             <h3 className="text-xl font-semibold text-[#1d2a57] mb-5">
//               Billing frequency
//             </h3>

//             <div className="flex space-x-4">
//               <button
//                 onClick={() => setBillingFrequency("MONTHLY")}
//                 className={`flex-1 border-2 rounded-lg py-3 text-center transition-all ${
//                   billingFrequency === "MONTHLY"
//                     ? "border-[#1A73E8] bg-blue-50"
//                     : "border-gray-300 hover:border-blue-300"
//                 }`}
//               >
//                 <span className="block font-semibold">Pay monthly</span>
//                 <span className="text-2xl font-bold">₹{priceMonthly}</span>
//                 <span className="text-sm text-gray-500">/month</span>
//               </button>

//               <button
//                 onClick={() => setBillingFrequency("YEARLY")}
//                 className={`relative flex-1 border-2 rounded-lg py-3 text-center transition-all ${
//                   billingFrequency === "YEARLY"
//                     ? "border-[#1A73E8] bg-blue-50"
//                     : "border-gray-300 hover:border-blue-300"
//                 }`}
//               >
//                 <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
//                   Save {discountPercent}%
//                 </div>

//                 <span className="block font-semibold">Pay Yearly</span>
//                 <span className="text-2xl font-bold">₹{priceYearlyDiscounted}</span>
//                 <span className="text-sm text-gray-500 block">/yearly</span>
//               </button>
//             </div>
//           </div>

//           {/* White Empty Div */}
//           <div className="h-40 w-full bg-white border rounded-lg"></div>

//           {/* Total Bill */}
//           <div className="space-y-4 pt-4 border-t">
//             <h3 className="text-xl font-semibold text-[#1d2a57] mb-5">
//               Total Bill
//             </h3>

//             <div className="flex justify-between text-base">
//               <span className="text-gray-600">
//                 {planName} ({billingFrequency === "YEARLY" ? "Yearly" : "Monthly"})
//               </span>
//               <span className="font-semibold">₹{priceDisplay}</span>
//             </div>

//             <div className="flex justify-between text-base">
//               <span className="text-gray-600">
//                 GST 18% (Government Tax)
//               </span>
//               <span className="font-semibold">₹{gstDisplay}</span>
//             </div>

//             <div className="flex justify-between text-base">
//               <span className="text-gray-600">Discount</span>
//               <span className="font-semibold text-green-600">
//                 ₹{discountDisplay}
//               </span>
//             </div>

//             <div className="flex justify-between pt-2 border-t font-bold text-xl">
//               <span className="text-[#1d2a57]">Grand Total</span>
//               <span className="text-[#1d2a57]">₹{totalDisplay}</span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
