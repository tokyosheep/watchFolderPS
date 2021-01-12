import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";
import { SendHostScript , HostObj } from "./connectHostScript";
//import { writeDebugData } from "../fileSystem/init";
import { StateType } from "../redux/stateType";

interface WatchDataType{
    launchToWatch:(options:StateType)=>boolean,
    stopWatch:()=>Promise<void>,
    options:StateType
}

export class WatchSystem implements WatchDataType{
    private _watcher:chokidar.FSWatcher|null;
    private _Jsx:HostObj;
    public path:string
    public options:StateType;
    constructor(){
        this._watcher = null;
        this._Jsx = new SendHostScript();
        this.path = "";
    }

    launchToWatch(options){
        try{
            console.log(this.path);
            this.options = options;
            const stats = fs.statSync(this.path);
            if(!stats.isDirectory()){
                alert("you must set directory path");
                throw new Error("the path is invalid");
            }
            this._watcher = chokidar.watch(this.path,{
                persistent:true,
                ignoreInitial:true,
                depth:0
            });

            this._watcher
            .on("ready",()=>console.log("ready"))
            .on("add",filePath=>{
                const flag = Object.entries(this.options.targetExts).filter(([key,value])=> value===true).some(([key,value])=> {
                    const ext = path.extname(filePath);
                    console.log(ext.substring(1,ext.length));
                    return ext.substring(1,ext.length) === key;
                });
                console.log(flag);
                if(!flag)return;
                //writeDebugData({path:filePath,options:this.options});
                (async()=>{
                    const flag = await this._Jsx.callHostScript({path:filePath,options:this.options});
                    console.log(flag);
                })();
            })
            .on("error",err=>console.log(err));

            return true;
        }catch(e){
            alert(e);
            return false;
        }
        
    }

    async stopWatch():Promise<void>{
        if(this._watcher === null)return;
        await this._watcher.close();
        console.log("stope");
    }

}

