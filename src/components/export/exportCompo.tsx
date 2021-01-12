import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { exportFolder_set , options_set } from "../../redux/actions/optionsDiapatch";
import { StateType } from "../../redux/stateType";
import FolderCompo from "./folderCompo";
import { SwitchBox } from "../parts/checkBox";
import { SmallTitle } from "../../styles/title";

import { openFolderDialog } from "../../fileSystem/init";
import { containers } from "../../styles/containers";

const { Export } = containers;

const ExportCompo = () =>{
    const dispatch = useDispatch();
    const exportPath = useSelector((state:StateType)=>state.exportFolder);
    const isExport = useSelector((state:StateType)=>state.options.isExport);
    const setPath = useCallback(()=>{
        const folder:string|null|undefined = openFolderDialog();
        if(folder === null || folder === undefined)return;
        dispatch(exportFolder_set(folder));
    },[exportPath]);
    const handleCheckBox = useCallback((e)=>{
        dispatch(options_set("isExport",e.target.checked));
    },[isExport]);
    return(
        <Export>
            <SmallTitle>export</SmallTitle>
            <SwitchBox checked={isExport} func={handleCheckBox} name="isExport" />
            <FolderCompo path={exportPath} disabled={!isExport} func={setPath} />
        </Export>
    )
}

export default ExportCompo;