const { app } = require("photoshop");
import { PSActionSet } from "./getActions";
//import { ActionSelected } from "../redux/reducer/options";
/*
export const getActions:()=>PSActionSet[] = () =>{
    const actions = app.actionTree;
    return actions;
}

export const loadAction:(setIndex:number,actionIndex:number)=>ActionSelected = (setIndex,actionIndex) =>{
    const actions = getActions();
    return{
        actionSet:{
            name:actions[actionIndex].name,
            index:actions[actionIndex].index
        },
        action:{
            name:actions[actionIndex].actions[setIndex].name,
            index:actions[actionIndex].actions[setIndex].index
        }
    }
}
*/