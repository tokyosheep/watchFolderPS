const initWatchFolder = "";
export type WatchAction = {type:"set_folder",folder:string};
type WatchReducer = (state:string,action:WatchAction)=>string;

export const watchFolder:WatchReducer = (state=initWatchFolder,action)=>{
    switch(action.type){
        case "set_folder":
            return action.folder;

        default:
            return state;
    }
}

const initWatchFlag = false;
export type WatchFlag = {type:"set_watch",flag:boolean};
export type WatchFlagReducer = (state:boolean,action:WatchFlag)=>boolean;

export const watchFlag:WatchFlagReducer = (state=initWatchFlag,action)=>{
    switch(action.type){
        case "set_watch":
            return action.flag;

        default:
            return state;
    }
}