import { csInterface , extensionRoot } from "./init";

export interface HostObj{
    jsx:string,
    arg?:object,
    callJsx:()=>Promise<string|boolean>,
    callHostScript:(obj:object)=>Promise<string|boolean>
}

type Return = string|boolean;

export class SendHostScript implements HostObj{
    constructor(public jsx:string = "hostScript",public arg?:object){

    }

    callJsx():Promise<string|boolean>{
        return new Promise((resolve,reject)=>{
            csInterface.evalScript(`$.evalFile("${extensionRoot}${this.jsx}")`,(o:Return)=>{
                if(!o||o==="false")reject(false);
                resolve(o);
            });
        })
    }

    callHostScript(obj):Promise<string|boolean>{
        return new Promise((resolve,reject)=>{
            csInterface.evalScript(`${this.jsx}(${JSON.stringify(obj)})`,(o:Return)=>{
                if(!o||o === "false"){
                    reject(false);
                }                
                resolve(o);
            });
        });
    }
} 