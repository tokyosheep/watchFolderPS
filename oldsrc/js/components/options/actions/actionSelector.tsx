import * as React from "react";
import { useCallback , useState , useMemo } from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { action_set } from "../../../redux/actions/actionDispatch";
import { ActionList , Action } from "../../../redux/reducer/options";

import { ActionSetSelector , ActionSelector } from "../../../parts/selector";
import { StateType } from "../../../redux/stateType";
import { optionsContainer } from "../../../styled/container";
const ActionWrapper = optionsContainer.action;


const ActionCompo = () =>{
    
    return(
            <ActionWrapper>
                <ActionSetSelector />
                <ActionSelector />
            </ActionWrapper>
    )
}

export default ActionCompo;


