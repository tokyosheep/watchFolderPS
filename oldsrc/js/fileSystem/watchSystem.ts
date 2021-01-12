
import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";
import { ExtOptions , Options } from "../redux/reducer/options";

interface WatchDataType{
    folder:string,
    launchToWatch:()=>boolean,
    stopWatch:()=>Promise<void>
}

export class WatchData implements WatchDataType{
    private _watcher:chokidar.FSWatcher|null;
    private _path:string = "";
    constructor(
    ){
        this._watcher = null;
    }

    set folder(path:string){
        this._path = path;
    }

    launchToWatch(){
        try{
            this._watcher = chokidar.watch(this._path,{
                persistent:true,
                ignoreInitial:true,
                depth:0
            });

            this._watcher
            .on("ready",()=>console.log("ready"))
            .on("add",path=>console.log(path))
            .on("error",err=>console.log(err));

            return true;
        }catch(e){
            console.log(e);
            return false;
        }
        
    }

    async stopWatch():Promise<void>{
        if(this._watcher === null)return;
        await this._watcher.close();
        console.log("stope");
    }
}