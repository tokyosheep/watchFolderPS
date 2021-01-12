import { SendHostScript } from "./connectHostScript";
import { SetActionList , Action } from "../redux/reducer/options";

export const getActions:()=>Promise<false|AppActions[]> = async() =>{
    const callJsx = (new SendHostScript("singleProcess/getActions.jsx"));
    let backValue:boolean|string = await callJsx.callJsx();
    const actions:AppActions[]|false = typeof backValue === "boolean" ? false : JSON.parse(backValue);
    console.log(actions);
    return actions;
}

type AppActions = {
    name:string,
    children:Action[]
}

export const setAction:(actions:AppActions[])=>SetActionList = actions =>{
    const sets:SetActionList = {
        action:{name:actions[0].children[0].name,index:0},
        set:{name:actions[0].name,index:0},
        actions:actions[0].children.map((a,i)=>({name:a.name,index:i})),
        actionsets:actions.map((a,i)=>({name:a.name,index:i,actions:a.children.map((ac,i)=>({name:ac.name,index:i}))}))
    };
    return sets;
}