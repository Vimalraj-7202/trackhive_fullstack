export interface Project{
    _id?: string;
    projectName:string,
    projectDescription:string,
    duration:string
}
export type ProjectData={
    project:Project
}