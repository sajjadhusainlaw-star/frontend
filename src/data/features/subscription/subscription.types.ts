export interface Plans {
  id: string;
  name: string;
  description?: string;
  features: string[];
  price: number;
  currency?: string;
  discount?: number;
  status?: "active" | "inactive";
}
export interface AddPlanRequest {
  name: string;
  price: number | string;
  discount: number | string;
  features: string[];
}
export interface AddPlanResponse {
  success: string;
  message: string;
}
export interface PlanGetResponse {
  success: string;
  message: string;
  data: Plans[];
}

// Subscription Order Types
export interface CreateOrderRequest {
  planId: string;
}

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  data: {
    orderId: string;
    razorpayOrderId: string;
    amount: number;
    currency: string;
  };
}

// User Subscription Types
export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  planName?: string;
  status: "active" | "inactive" | "expired";
  startDate: string;
  endDate: string;
  autoRenew?: boolean;
}

export interface UserSubscriptionResponse {
  success: boolean;
  message: string;
  data: UserSubscription | null;
}

export interface SubscriptionState {
  loading: boolean;
  error: string | null;
  plans: Plans[];
  currentSubscription: UserSubscription | null;
  message: string | null;
}
