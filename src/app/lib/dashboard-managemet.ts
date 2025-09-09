import {apiGet} from "../services/axios.instance";
import { DASHBOARD } from "../services/api.constant";

class DashboardService{
    async getDashboard():Promise<any>{
        const response=await apiGet(DASHBOARD);
        return response.data;
    }
}

export const dashboard_Service=new DashboardService();