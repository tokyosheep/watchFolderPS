import * as React from "react";
import { useCallback } from "react";
import { TargetListStyle } from "../listStyle";

import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../../redux/stateType";
import { saveExtension_set , options_set } from "../../../redux/actions/optionsDiapatch";
import { SmallTitle } from "../../../styles/title";
import { SwitchBox } from "../../parts/checkBox";

import { CheckExtBox } from "../checkExt";
import { containers } from "../../../styles/containers";
const { SaveExts } = containers;

const SaveExtList = () =>{
    const dispatch = useDispatch();
    const isSave = useSelector((state:StateType)=>state.options.isSave);
    const saves = useSelector((state:StateType)=>state.saveExts);
    const handleSwitchBox = useCallback((e)=>dispatch(options_set("isSave",e.target.checked)),[isSave]);
    const handleCheckBox = useCallback((e,arg)=>dispatch(saveExtension_set(arg.prop,e.target.checked)),[saves]);
    const saveList = Object.entries(saves).map(([key,value])=><li key={key}><CheckExtBox checked={value} func={handleCheckBox} name={key} arg={{prop:key}} disabled={!isSave}/></li>);
    return(
        <SaveExts>
            <SmallTitle>save</SmallTitle>
            <SwitchBox checked={isSave} func={handleSwitchBox} name="isSave"></SwitchBox>
            <TargetListStyle>
                {saveList}
            </TargetListStyle>
        </SaveExts>
    )
}

export default SaveExtList;