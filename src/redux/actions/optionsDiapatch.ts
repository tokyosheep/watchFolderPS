import { ExportAction , OptionAction } from "../reducer/options";
import { SaveAction , targetExtAction } from "../reducer/ext";

export const saveExtension_set:(prop:string,checked:boolean)=>SaveAction = (prop,checked)=>{
    return{type:"save_check",prop:prop,checked:checked};
} 

export const targetExtension_set:(prop:string,checked:boolean)=>targetExtAction = (prop,checked)=>{
    return{type:"target_check",prop:prop,checked:checked};
}

export const exportFolder_set:(folder:string)=>ExportAction = folder =>{
    return{folder:folder,type:"exportFolder_set"};
}

export const options_set:(prop:string,checked:boolean)=>OptionAction = (prop,checked)=>{
    return{type:"option_set",prop:prop,checked:checked};
}