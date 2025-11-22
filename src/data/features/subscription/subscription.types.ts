
export interface AddPlanRequest {
  name: string;
  price: number | string;
  discount:string;
  // currency: string;
  features: string[];
}
export interface AddPlanResponse {
  success:string;
  message:string;
}




export interface SubscriptionState {
  loading: boolean;
  error: string | null;
//   plan: string | null;
//   status: "active" | "expired" | "canceled" | "trial" | null;
//   startDate: string | null;
//   endDate: string | null;
//   autoRenew: boolean;
//   price: number | null;
//   currency: string | null;
  message: string | null;
}
