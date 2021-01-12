import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { watchFolder_set , watchFlag_set } from "../../redux/actions/watchDispatch";
import { StateType } from "../../redux/stateType";
import FolderCompo from "../../parts/folderParts/watchFolder";
import { watchContainer } from "../../styled/container";
import { getFolder } from "../../fileSystem/getFolder";
import UseWatch from "./useWatch";
const MainWrapper = watchContainer.main;

const WatchMain = () =>{
    const [ launchWatch , stopWatch ] = UseWatch();
    const watchDirectory = useSelector((state:StateType)=>state.watchFolder);
    const watchFlag = useSelector((state:StateType)=>state.watchFlag);
    const dispatch = useDispatch();
    const setWatchFolder = useCallback(()=>{
        (async()=>{
            const folder = await getFolder();
            if(folder === null)return;
            dispatch(watchFolder_set(folder));
        })();
    },[watchDirectory]);
    const pushWatchButton = () =>{
        if(watchFlag){
            if(!launchWatch())return;
            dispatch(watchFlag_set(true));
        }else{
            stopWatch();
            dispatch(watchFlag_set(false));
        }
    }

    return(
        <MainWrapper>
            <FolderCompo folder={watchDirectory} disabled={false} clickFunc={setWatchFolder}></FolderCompo>
            <button onClick={pushWatchButton}>{watchFlag ? "watch stop" : "watch"}</button>
        </MainWrapper>
    )
}

export default WatchMain;