import { SetActionList , ActionSetList , ActionLoad , ActionList, actionList } from "../reducer/options";

export const action_load:(actionList:ActionList)=>ActionLoad = actionList =>{
    return{type:"action_load",actionList:actionList};
}

export const action_set:(actionObj:SetActionList)=>ActionSetList = actionObj =>{
    return{type:"action_set",...actionObj}
}