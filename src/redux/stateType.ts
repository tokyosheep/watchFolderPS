import { Options , ActionList } from "./reducer/options";
import { ExtOptions } from "./reducer/ext";

export type StateType = {
    targetExts:ExtOptions,
    saveExts:ExtOptions,
    options:Options,
    actionList:ActionList,
    watchFolder:string,
    exportFolder:string,
    watchFlag:boolean
}