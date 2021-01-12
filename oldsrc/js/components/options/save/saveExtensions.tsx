import * as React from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { saveExtension_set , options_set } from "../../../redux/actions/optionDispatch";
import { StateType } from "../../../redux/stateType";
import { HeaderSmall } from "../../../styled/titles";
import { CheckBoxList } from "../target/target";

import { CheckBoxCompo } from "../../../parts/switchBox";
import { optionsContainer } from "../../../styled/container";
import { SwitchBox } from "../../../parts/switchBox";
const SaveWrapper = optionsContainer.save;

const SaveExtensions = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.options);
    const saveExts = useSelector((state:StateType)=>state.saveExts);
    const handleSwitchBox = useCallback((e)=>dispatch(options_set("isSave",e.target.checked)),[options]);
    const handleCheckBox = useCallback((e,arg)=>dispatch(saveExtension_set(arg.prop,e.target.checked)),[saveExts]);
    const extList = Object.entries(saveExts).map(([key,value])=><li key={key}><CheckBoxCompo name={key} disabled={!options.isSave} checked={value} func={handleCheckBox} arg={{prop:key}}/></li>);
    return(
        <SaveWrapper>
            <HeaderSmall>save image</HeaderSmall>
            <SwitchBox name="isSave" checked={options.isSave} func={handleSwitchBox}/>
            <CheckBoxList>
                {extList}
            </CheckBoxList>
        </SaveWrapper>
    )
}

export default SaveExtensions;