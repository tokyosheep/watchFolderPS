import * as React from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { targetExtension_set } from "../../../redux/actions/optionDispatch";
import { StateType } from "../../../redux/stateType";
import { HeaderSmall } from "../../../styled/titles";

import { CheckBoxCompo } from "../../../parts/switchBox";
import { optionsContainer } from "../../../styled/container";
const TargetWrapper = optionsContainer.targetExt;

export const CheckBoxList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style:none;
    padding: 0;
`;

const TargetCompo = () =>{
    const dispatch = useDispatch();
    const exts = useSelector((state:StateType)=>state.targetExts);
    const handleCheckBox = useCallback((e,arg)=>dispatch(targetExtension_set(arg.prop,e.target.checked)),[exts]);
    const extList = Object.entries(exts).map(([key,value])=><li key={key}><CheckBoxCompo name={key} disabled={false} checked={value} func={handleCheckBox} arg={{prop:key}}/></li>);
    return(
        <TargetWrapper>
            <HeaderSmall>target</HeaderSmall>
            <CheckBoxList>
                {extList}
            </CheckBoxList>
        </TargetWrapper>
    )
}

export default TargetCompo;