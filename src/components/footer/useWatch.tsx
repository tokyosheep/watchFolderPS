import * as React from "react";
import * as fs from "fs"; 
import { useMemo } from "react";
import { useSelector , useDispatch } from "react-redux";
import { watchFlag_set } from "../../redux/actions/watchDispatch";
import { useState } from "react";
import { ExtOptions } from "../../redux/reducer/ext";

import { WatchSystem } from "../../fileSystem/watchSystem";
import { StateType } from "../../redux/stateType";

const anyTargets:(target:ExtOptions)=>boolean = targets => Object.values(targets).includes(true);
const anySaves:(saves:ExtOptions)=>boolean = saves => Object.values(saves).includes(true);

const useWatch = () =>{
    const dispatch = useDispatch();
    const [watch] = useState(new WatchSystem());
    const watchFolder = useSelector((state:StateType)=>state.watchFolder);
    const options = useSelector((state:StateType)=>state);
    const launchWatch = () =>{
        if(!anyTargets(options.targetExts)){
            alert("you didn't choice any atrget exts");
            return false;
        }
        if(options.watchFolder === options.exportFolder && options.options.isExport){
            alert("please set export folder different with watch folder");
            return false;
        }
        if(options.options.isExport&&options.options.isSave&&!fs.statSync(options.exportFolder).isDirectory()){
            alert("please check the export folder");
            return false;
        }
        if(options.options.isSave&&!anySaves(options.saveExts)){
            alert("please check any save ext");
            return false;
        }
        dispatch(watchFlag_set(watch.launchToWatch(options)));
    };
    const setPath:(path:string)=>void = path => watch.path = path;
    useMemo(()=>setPath(watchFolder),[watchFolder]);
    const stopWatch = () => {
        watch.stopWatch();
        dispatch(watchFlag_set(false));
    }

    return [launchWatch,stopWatch];
}

export default useWatch;
