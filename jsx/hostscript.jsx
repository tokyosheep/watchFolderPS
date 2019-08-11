/*
obj = {
    path:"/Users/kawanoshuji/Desktop/testFolder/dog.psd"
}
exportJpg(obj);
*/
function exportJpg(obj){
    var path = new File(obj.path);
    try{
        app.open(path);
    }catch(e){
        alert(e);
        return false;
    }
    var fullPath = activeDocument.fullName;
    var name = activeDocument.name;
    var folderPath = activeDocument.path + "/jpeg";
    var finishPath = activeDocument.path + "/finished";
    makefolder(folderPath,finishPath);
    saveJpeg(folderPath +"/"+ name);
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    moveFile(fullPath,finishPath + "/" + name);
}

function makefolder(){
    for(var no =0; no<arguments.length; no++){//引数に渡された数だけフォルダを作る
        var folderObj = new Folder(arguments[no]);
        folderObj.create();
    }
}

function saveJpeg(file){
    fileObj = new File(file);
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
}

function moveFile(before,after){
    var file = new File(before);
    var flag = file.copy(after);
    if(!flag){
        alert("It can't be copied");
        return;
    }
    file.remove();
}