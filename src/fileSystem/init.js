
import fs from "fs";
import path from "path";
import url from "url";
const csInterface = new CSInterface();
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;

const dir_home = process.env[process.platform == `win32` ? `USERPROFILE` : `HOME`];
const dir_desktop = path.join(dir_home, `Desktop`);//デスクトップパス
const jsxParts = `${extensionRoot}/parts`;

const readDirFiles = (path) =>{
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(err)reject(err);
            resolve(files);
        })
    });
}

const loadJsx = async(jsxFolder) =>{
    const parts = await readDirFiles(jsxFolder).catch(e=>console.log(e));
    const jsxes = parts.filter(f => path.extname(f) === ".jsx");
    console.log(jsxes);
    jsxes.forEach(jsx =>  csInterface.evalScript(`$.evalFile("${jsxFolder}/${jsx}")`));
}

const init = async(func) =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    await loadJsx(jsxParts);
    csInterface.addEventListener("applicationActivate",()=>{
        setTimeout(()=>{
            func();
        },3000);
    });
}

const openFolderDialog = () =>{
    const f = cep.fs.showOpenDialog(false,true,"open",dir_desktop);
    const parsed = url.parse(f.data[0]);
    console.log(parsed);
    return parsed.path;
}

const writeDebugData = obj =>{
    fs.writeFileSync(`${extensionRoot}/data.json`,JSON.stringify(obj));
}

export { csInterface , extensionRoot , init , openFolderDialog , writeDebugData};