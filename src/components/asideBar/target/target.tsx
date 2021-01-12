import * as React from "react";
import { useCallback } from "react";
import { TargetListStyle } from "../listStyle";

import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../../redux/stateType";
import { targetExtension_set } from "../../../redux/actions/optionsDiapatch";

import { CheckExtBox } from "../checkExt";
import { containers } from "../../../styles/containers";
import { SmallTitle } from "../../../styles/title";


const { TargetExts } = containers;
const TargetSide = () =>{
    const dispatch = useDispatch();
    const targets = useSelector((state:StateType)=>state.targetExts);
    const handleCheckBox = useCallback((e,arg)=>dispatch(targetExtension_set(arg.prop,e.target.checked)),[targets]);
    const targetList = Object.entries(targets).map(([key,value])=><li key={key}><CheckExtBox checked={value} func={handleCheckBox} name={key} arg={{prop:key}} disabled={false}/></li>);
    return(
        <TargetExts>
            <SmallTitle>target</SmallTitle>
            <TargetListStyle>
                {targetList}
            </TargetListStyle>
        </TargetExts>
    )
}

export default TargetSide;