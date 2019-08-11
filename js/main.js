window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    themeManager.init();

    const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;
    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    
    const fs = require("fs");
    const path = require("path");
    const chokidar = require("chokidar");
    let watcher = null;//最初にwatcher自体にnullを代入しないとcloseメソッドが正常に動かないよう
    const extList = [".psd",".tiff",".psb"];
    
    const watchStart = document.getElementById("watchStart");
    const watchStop = document.getElementById("watchStop");
    const selectFolder = document.getElementById("selectFolder");
    const FolderName = document.getElementById("FolderName");
    
    const dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
    const dir_desktop = require("path").join(dir_home, "Desktop");
    
    selectFolder.addEventListener("click",()=>{
        const f = cep.fs.showOpenDialog(false,true,"select folder",dir_desktop);//ダイアログでファイルを選ぶ
        if(f.data.length < 1){
            alert("you didn't choose any folder");
            return false;
        }
        FolderName.textContent = f.data[0];
    });
    
    watchStart.addEventListener("click",()=>{
        if(FolderName.textContent === "" || FolderName.textContent === null){
            alert("you haven't chosen folder");
            return;
        }
        alert("watch start");
        watchBegin(FolderName.textContent);
    });
    
    
    function watchBegin(filePath){
        watcher = chokidar.watch(filePath,{
            persistent:true,
            ignoreInitial:true,//開始当初のフォルダーは反応させない
            depth:0//0にしないと再帰的にファイルをチェックするっぽい
        });
        watcher.on("add",f => {console.log(`file ${f} has been added`)
                dispatchJSX(f);              
                })
                .on("change",f => console.log(`file ${f} has been changed`))
                .on("unlink",f => console.log(`file ${f} has been removed`));
    }
    
    function dispatchJSX(file){
        const ext = path.extname(file).toLowerCase();
        console.log(ext);
        const flag = extList.some(v => ext.includes(v));
        console.log(flag);
        if(!flag){
            return;
        }
        const obj = {
            path:file
        }
        csInterface.evalScript(`exportJpg(${JSON.stringify(obj)})`);
    }
    
    watchStop.addEventListener("click",()=>{
        watcher.close();
        alert("watch stopped");
    });
}