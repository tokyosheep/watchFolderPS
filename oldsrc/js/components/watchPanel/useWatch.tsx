
import * as React from "react";
import { useState , useCallback , useMemo } from "react";
import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../../redux/stateType";
import { WatchData } from "../../fileSystem/watchSystem";

const UseWatch = () =>{
    const folder = useSelector((state:StateType)=>state.watchFolder);
    const [watch] = useState(new WatchData());
    const setPath = useCallback((path:string)=>{
        watch.folder = path;
    },[watch.folder]);
    const launchWatch = () => watch.launchToWatch();
    const stopWatch = () =>watch.stopWatch();
    useMemo(()=>{
        setPath(folder);
    },[folder]);
    return[launchWatch , stopWatch ];
}

export default UseWatch;