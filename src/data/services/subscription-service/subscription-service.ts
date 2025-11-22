import { AddPlanRequest, AddPlanResponse } from "@/data/features/subscription/subscription.types";
import apiClient from "../config/apiClient";
import { API_ENDPOINTS } from "../config/apiContants";

export const subscriptionApi = {
  addPlan: async (data: AddPlanRequest) => {
    // console.log(data);
    const response = await apiClient.post<AddPlanResponse>(API_ENDPOINTS.SUBSCRIPTION.CREATE, data);
    console.log("response :", response);
    return response;
  },


}