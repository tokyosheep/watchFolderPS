/*
#include "./parts/save.jsx";


var obj = {
    "path": "/Users/kawanoshuji/Desktop/test/IMG_1308.jpeg",
    "options": {
        "targetExts": {
            "jpg": true,
            "tiff": true,
            "psd": true,
            "psb": false,
            "png": false,
            "gif": false,
            "eps": false
        },
        "saveExts": {
            "jpg": true,
            "tiff": false,
            "psd": false,
            "psb": false,
            "png": false,
            "gif": false,
            "eps": false
        },
        "options": {
            "isSave": true,
            "isAction": false,
            "isExport": true
        },
        "actionList": {
            "action": {
                "name": "トーンジャンプ",
                "index": 6
            },
            "set": {
                "name": "河野",
                "index": 5
            }
        },
        "watchFolder": "/Users/kawanoshuji/Desktop/test/",
        "exportFolder": "/Users/kawanoshuji/Desktop/ex/",
        "watchFlag": false
    }
}

hostScript(obj);
*/
function hostScript(obj){
    try{
        var path = new File(obj.path);
        app.open(path);
        var initLength = app.activeDocument.length;
        if(obj.options.options.isAction){
            doAction(obj.options.actionList.action.name,obj.options.actionList.set.name);
        }
        if(initLength !== app.activeDocument.length)return false;
        if(obj.options.options.isSave){
            for(var p in obj.options.saveExts){
                if(obj.options.saveExts[p]){
                    var filePath = getSavePath(obj.options.options.isExport, obj.options.watchFolder, obj.options.exportFolder ,p);
                    saveExts(p,filePath);
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }
            }
        }
    }catch(e){
        alert(e);
        return false;
    }
    return true;
}

function getSavePath(isExport,watchFolder,exportFolder,ext){
    if(isExport)return exportFolder;
    makefolder(watchFolder+"/"+ext);
    return watchFolder+"/"+ext;
}

