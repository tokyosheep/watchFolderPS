import { WatchAction , WatchFlag } from "../reducer/watch";

export const watchFolder_set:(folder:string)=>WatchAction = folder =>{
    return{type:"set_folder",folder:folder}
} 

export const watchFlag_set:(flag:boolean)=>WatchFlag = flag =>{
    return{type:"set_watch",flag:flag};
}