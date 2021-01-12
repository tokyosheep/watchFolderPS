

export type ExtOptions = {
    [key:string]:boolean,
    jpg:boolean,
    tiff:boolean,
    psd:boolean,
    png:boolean,
    gif:boolean,
    eps:boolean
}

export type targetExtAction = {type:"target_check",prop:string,checked:boolean};

export type targetReducer = (state:ExtOptions,action:targetExtAction)=>ExtOptions;

const initTarget = {
    jpg:false,
    tiff:false,
    psd:false,
    png:false,
    gif:false,
    eps:false
}
export const targetExts:targetReducer = (state = initTarget,action)=>{
    switch(action.type){
        case"target_check":
            const stat = {...state};
            stat[action.prop] = action.checked;
            return stat;

        default:
            return state;
    }
}

const initSave = {
    jpg:false,
    tiff:false,
    psd:false,
    png:false,
    gif:false,
    eps:false
}

export type SaveAction = {type:"save_check",prop:string,checked:boolean};
export type SaveReducer = (state:ExtOptions,action:SaveAction)=>ExtOptions;

export const saveExts:SaveReducer = (state=initSave,action)=>{
    switch(action.type){
        case "save_check":
            const stat = {...state};
            stat[action.prop] = action.checked;
            return stat;

        default:
            return state;
    }
}