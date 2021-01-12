import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../redux/stateType";
import useWatch from "./useWatch";

import { SmallTitle } from "../../styles/title";
import { MainButton } from "../parts/button";
import { containers } from "../../styles/containers";
const { Footer } = containers;

const FooterCompo = () =>{
    const [launchWatch,stopWatch] = useWatch();
    const isWatch = useSelector((state:StateType)=>state.watchFlag);
    const watchDirectory = () =>{
        if(!isWatch){
            launchWatch();
        }else{
            stopWatch();
        }
    }
    return(
        <Footer>
            <SmallTitle>watch start</SmallTitle>
            <MainButton func={watchDirectory} name={(isWatch ? "stop watch" : "watch start")}/>
        </Footer>
    )
}

export default FooterCompo;