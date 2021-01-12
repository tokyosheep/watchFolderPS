import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { watchFolder_set } from "../../redux/actions/watchDispatch";
import { StateType } from "../../redux/stateType";
import FolderCompo from "../export/folderCompo";
import { SmallTitle } from "../../styles/title";
import { containers } from "../../styles/containers";

import { openFolderDialog } from "../../fileSystem/init";

const { Main } = containers;
const WatchMain = () =>{
    
    const dispatch = useDispatch();
    const watchFolder = useSelector((state:StateType)=>state.watchFolder);
    const setWatchPath = useCallback((e)=>{
        const folder:string|null|undefined = openFolderDialog();
        if(folder === null || folder === undefined)return;
        dispatch(watchFolder_set(folder));
    },[watchFolder]);
    return(
        <Main>
            <SmallTitle>watch folder</SmallTitle>
            <FolderCompo path={watchFolder} func={setWatchPath} disabled={false} />
        </Main>
    )
}

export default WatchMain;