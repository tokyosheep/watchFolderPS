import * as React from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { action_load } from "../redux/actions/actionDispatch";
import { getActions , setAction } from "../fileSystem/getActions";
import TargetCompo from "../components/options/target/target";
import Header from "../components/options/header/header";
import SaveExtensions from "../components/options/save/saveExtensions";
import ActionCompo from "../components/options/actions/actionSelector";
import ExportCompo from "../components/options/exportFolder/exportFolder";

import { optionsContainer } from "../styled/container";
const Container = optionsContainer.container;

const OptionLayout = () =>{
    const dispatch = useDispatch();
    useMemo(()=>{
        dispatch(action_load(setAction(getActions(),0,0)));
    },[]);
    return(
        <Container>
            <Header />
            <TargetCompo />
            <SaveExtensions />
            <ActionCompo />
            <ExportCompo />
        </Container>
    )
}

export default OptionLayout;