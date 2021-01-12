const { app } = require("photoshop");
import { Action , ActionSet , ActionList } from "../redux/reducer/options";


export type PSActionBase = {
    index:number,
    name:string,
    _id:number
};

export type PSActionCildren = PSActionBase & {
    parent:PSActionSet[],
    play:()=>Promise<void>
}

export type PSActionSet = PSActionBase & {
    actions:PSActionCildren[]
}

const setActionChildren:(actions:PSActionCildren[])=>Action[] = actions =>{
    return actions.reduce((acc:Action[],current:PSActionCildren)=>{
        return [...acc,{
            name:current.name,
            index:current.index
        }];
    },[]);
}

export const getActions = () =>{
    const actions:PSActionSet[] = app.actionTree;
    const actionList = actions.reduce((acc:ActionSet[],current:PSActionSet)=>{
        return [...acc,{
            actions:setActionChildren(current.actions),
            name:current.name,
            index:current.index
        }];
    },[]);
    //actions[0].actions[1].play();
    console.log(actionList);
    return actionList;
}

export const setAction:(actionsets:ActionSet[],setIndex:number,actionIndex:number)=>ActionList = (actionsets,setIndex,actionIndex) =>{
    return{
        actionsets:[...actionsets],
        actions:[...actionsets[setIndex].actions],
        action:actionsets[setIndex].actions[actionIndex],
        set:actionsets[setIndex]
    }
} 