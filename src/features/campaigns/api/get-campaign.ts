import { api } from "@/lib/api"

export const getCampaign = (id:string) => {
  return api.get(`/campaigns/${id}`);
}