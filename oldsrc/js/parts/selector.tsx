import * as React from "react";
import { useCallback } from "react";
import shallowEqual from "redux";
import { useDispatch ,useSelector } from "react-redux";
import styled from "styled-components";

import { StateType } from "../redux/stateType";
import { action_set } from "../redux/actions/actionDispatch";
import { ActionList , ActionSet , Action } from "../redux/reducer/options";

const Selector = styled.select`
appearance: none;
    border: none;
    padding: 3px;
    font-size: 12px;
    background: rgba(30,30,30,0.3);
    color: #fff;
    &:focus{
        outline: none;
    }
`;

export const ActionSetSelector:()=>JSX.Element = () =>{
    const dispatch = useDispatch();
    const actionList = useSelector((state: StateType)=>state.actionList);
    const handleSelectSet = useCallback((e)=>{
        const set = actionList.actionsets.find(acset=> acset.name === e.target.value);
        if(set === undefined)return;
        console.log(set);
        const replace:ActionList ={
            set:{...set},
            actions:actionList.actionsets[set.index].actions.map(a => ({...a})),
            action:{...actionList.actionsets[set.index].actions[0]},
            actionsets:actionList.actionsets.map(s =>({...s}))
        }
        console.log(replace);
        dispatch(action_set(replace));
    },[actionList]);
    const optionList = actionList.actionsets.map(op=><option key={op.index} value={op.name}>{op.name}</option>);
    return(
        <Selector onChange={(e)=>handleSelectSet(e)} value={actionList.set.name}>
            {optionList}
        </Selector>
    )
}

export const ActionSelector = () =>{
    const dispatch = useDispatch();
    const actionList = useSelector((state:StateType)=>state.actionList);
    console.log(actionList);
    const handleSelector = useCallback(e=>{
        const action = actionList.actions.find(ac=> ac.name === e.target.value);
        if(action === undefined)return;
        const replace = {...actionList};
        replace.action = {...action};
        dispatch(action_set(replace));
    },[actionList]);
    const optionList = actionList.actionsets[actionList.set.index].actions.map(ac=><option key={ac.index} value={ac.name}>{ac.name}</option>);
    console.log(actionList.actionsets[actionList.set.index].actions);
    console.log("optionList");
    return(
        <Selector onChange={(e)=>handleSelector(e)} value={actionList.action.name}>
            {optionList}
        </Selector>
    )
}
