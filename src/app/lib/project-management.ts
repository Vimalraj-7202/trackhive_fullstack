import { apiGet,apiDelete,apiPost,apiPut } from "../services/axios.instance";
import { GETALLPROJECT,CREATE_PROJECT,DELETE_PROJECT,UPDATE_PROJECT} from "../services/api.constant";
class project_Service{

    //getallproject
    async getAllProject():Promise<any>{
        const response=await apiGet(GETALLPROJECT);
        return response.data;
    }

    //create project
    async createProject(data:any):Promise<any>{
        const response=await apiPost(CREATE_PROJECT,data)
        return response.data;
    }

    //update project
    async updateProject(id:string,data:any):Promise<any>{
        const response=await apiPut(`${UPDATE_PROJECT}/${id}`,data);
        return response.data;
    }

    //delete project
    async deleteProject(id:string):Promise<any>{
        const response=await apiDelete(`${DELETE_PROJECT}/${id}`)
        return response.data
    }
}

export const projectService=new project_Service();