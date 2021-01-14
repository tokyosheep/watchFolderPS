function makefolder(){
    for(var no =0; no<arguments.length; no++){//引数に渡された数だけフォルダを作る
        var folderObj = new Folder(arguments[no]);
        folderObj.create();
    }
}

function saveExts(ext,path){
    var file = path + app.activeDocument.name;
    switch(ext){
        case "jpg":
            saveJpeg(file);
            break;

        case "tiff":
            saveTiff(file);
            break;

        case "psd":
            savePSD(file);
            break;

        case "png":
            savePNG(file);
            break;

        case "gif":
            saveGIF(file);
            break;

        case "eps":
            saveEPS(file);
            break;

        default:
            break;
    }
}

function saveJpeg(file){
    fileObj = new File(file);
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 12;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
}

function savePSD(file){
    var  fileObj = new File(file);
    
    psdOpt = new PhotoshopSaveOptions();
    psdOpt.alphaChannels = true;
    psdOpt.annotations = true;
    psdOpt.embedColorProfile = true;
    psdOpt.layers = true;
    psdOpt.spotColors = false;
    activeDocument.saveAs(fileObj, psdOpt, true, Extension.LOWERCASE);    
}

function saveTiff(file){
    var  fileObj = new File(file);
    tiffOpt = new TiffSaveOptions();
    tiffOpt.alphaChannels = false;
    tiffOpt.annotations = true;
    tiffOpt.byteOrder = ByteOrder.MACOS;
    tiffOpt.embedColorProfile = true;
    tiffOpt.imageCompression = TIFFEncoding.NONE;
    tiffOpt.jpegQuality = 12;
    tiffOpt.layerCompression = LayerCompression.RLE;
    //---------------レイヤー情報-------------------------------------------------------------
    tiffOpt.layers = true;//レイヤーを統合するかしないかのオプション  
    
    //--------------------------------------------------------------------------------------------
    tiffOpt.saveImagePyramid = false;
    tiffOpt.spotColors = false;
    
    //-----------------透過情報----------------------------------
    
    tiffOpt.transparency = true;

    //------------------------------------------------------------------
    
    activeDocument.saveAs(fileObj, tiffOpt, true, Extension.LOWERCASE);    
}

function savePNG(file){
    var  fileObj = new File(file); 
    pngOpt = new PNGSaveOptions();
    pngOpt.interlaced = false;
    activeDocument.saveAs(fileObj, pngOpt, true, Extension.LOWERCASE);    
}

function saveGIF(file){
    var  fileObj = new File(file);   
    gifOpt = new GIFSaveOptions();
    gifOpt.colors = 32;
    gifOpt.dither = Dither.NONE;
    gifOpt.interlacted = true;
    gifOpt.matte = MatteType.WHITE;
    gifOpt.palette = Palette.EXACT;
    gifOpt.preserveExactColors = false;
    gifOpt.transparency = true;
    activeDocument.saveAs(fileObj, gifOpt, true, Extension.LOWERCASE); 
}

function saveEPS(file){
    var fileObj = new File(file); 
    var epsOpt = new EPSSaveOptions();
    epsOpt.embedColorProfile = true;
    epsOpt.encoding = SaveEncoding.JPEGMAXIMUM;
    epsOpt.halftoneScreen = false;
    epsOpt.interpolation = false;
    epsOpt.preview = Preview.MACOSJPEG;
    epsOpt.psColorManagement = false;
    epsOpt.transferFunction = false;
    epsOpt.transparentWhites = false;
    epsOpt.vectorData = false;
    activeDocument.saveAs(fileObj, epsOpt, true, Extension.LOWERCASE); 
}