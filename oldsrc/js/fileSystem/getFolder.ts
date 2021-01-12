const uxp = require("uxp");
const uxpFs = uxp.storage.localFileSystem;

export const getFolder:()=>Promise<string|null> = async() =>{
    const folder = await uxpFs.getFolder();
    return folder.nativePath;
}