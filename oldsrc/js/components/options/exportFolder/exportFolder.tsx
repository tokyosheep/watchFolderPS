import * as React from "react";
const { app } = require("photoshop");
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { exportFolder_set , options_set } from "../../../redux/actions/optionDispatch";
import { StateType } from "../../../redux/stateType";
import FolderCompo from "../../../parts/folderParts/watchFolder";
import { optionsContainer } from "../../../styled/container";
import { getFolder } from "../../../fileSystem/getFolder";

import { SwitchBox } from "../../../parts/switchBox";

const ExportContainer = optionsContainer.export;

const ExportCompo = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.options);
    const exportFolder = useSelector((state:StateType)=>state.exportFolder);
    const handleFolder = useCallback((disabled)=>{
        if(disabled)return;
        (async()=>{
            const folder = await getFolder();
            if(folder === null)return;
            dispatch(exportFolder_set(folder));
        })();
    },[exportFolder]);
    const handleCheckBox = useCallback(e=>{
        dispatch(options_set("isExport",e.target.checked));
    },[options]);
    return(
        <ExportContainer>
            <SwitchBox name="isExport" checked={options.isExport} func={handleCheckBox} />
            <FolderCompo disabled={!options.isExport} folder={exportFolder} clickFunc={handleFolder} />
        </ExportContainer>
    )
}

export default ExportCompo;