import * as React from "react";
import { useCallback } from "react";
import { action_set } from "../../redux/actions/actionDispatch";
import { options_set } from "../../redux/actions/optionsDiapatch";

import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../redux/stateType";
import ActionSelectorForm from "./selector";
import { SetActionList , Action , ActionSet } from "../../redux/reducer/options";
import { SwitchBox } from "../parts/checkBox";
import { SmallTitle } from "../../styles/title";

import { containers } from "../../styles/containers";
const ActionArapper = containers.Action;

const ActionSelect = () =>{
    const dispatch = useDispatch();
    const isAction = useSelector((state:StateType)=>state.options.isAction);
    const actions = useSelector((state:StateType)=>state.actionList);
    const handleSwitch = useCallback((e)=>dispatch(options_set("isAction",e.target.checked)),[isAction]);
    console.log(actions);
    const handleSelectChildren = useCallback((e:React.ChangeEvent<HTMLSelectElement>,obj:Action)=>{
        const act = {...actions};
        act.action = act.actions.find(a=> a.name === e.target.value);
        dispatch(action_set(act));
    },[actions]);

    const handleSelectSet = useCallback((e:React.ChangeEvent<HTMLSelectElement>,obj:ActionSet)=>{
        const act = {...actions};
        const set = actions.actionsets.find((a,i)=> a.name === e.target.value);
        act.set = {name:set.name,index:set.index};
        act.actions = [...set.actions];
        dispatch(action_set(act));
    },[actions]);
    return(
        <ActionArapper>
            <SmallTitle>use action</SmallTitle>
            <SwitchBox func={handleSwitch} checked={isAction} name="isAction"/>
            <ActionSelectorForm disabled={!isAction} options={actions.actionsets} value={actions.set} func={handleSelectSet} />
            <ActionSelectorForm disabled={!isAction} options={actions.actions} value={actions.action} func={handleSelectChildren} />
        </ActionArapper>
    )
}

export default ActionSelect;