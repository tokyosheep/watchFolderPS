import * as React from "react";
import { useMemo } from "react";
import { useSelector , useDispatch } from "react-redux";
import { action_set } from "../redux/actions/actionDispatch";
import { createGlobalStyle } from "styled-components";

import LoadingLayer from "../components/loading/loading";
import WatchHeader from "../components/header/header";
import WatchMain from "../components/main/watchMain";
import TargetSide from "../components/asideBar/target/target";
import SaveExtList from "../components/asideBar/save/saveExts";
import ExportCompo from "../components/export/exportCompo";
import ActionSelect from "../components/actions/actionSelect";
import FooterCompo from "../components/footer/footer";

import { init } from "../fileSystem/init";
import { getActions , setAction } from "../fileSystem/getActions";

import { containers } from "../styles/containers";
const { Container } = containers;

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;

    }
`;

const Layout = () =>{
    const dispatch = useDispatch();
    useMemo(()=>{
        init();
        (async()=>{
            const actions = await getActions();
            if(actions===false)return;
            dispatch(action_set(setAction(actions)));
        })();
    },[])
    return(
        <>
            <GlobalStyle />
            <LoadingLayer />
            <Container>
                <WatchHeader />
                <WatchMain />
                <TargetSide />
                <SaveExtList />
                <ExportCompo />
                <ActionSelect />
                <FooterCompo />
            </Container>
        </>
    )
}

export default Layout;