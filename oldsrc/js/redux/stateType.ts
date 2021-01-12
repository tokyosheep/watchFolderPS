import { ExtOptions , Options , ActionList } from "./reducer/options";

export type StateType = {
    targetExts:ExtOptions,
    saveExts:ExtOptions,
    options:Options,
    actionList:ActionList,
    watchFolder:string,
    exportFolder:string,
    watchFlag:boolean
}