

export type ExtOptions = {
    [key:string]:boolean,
    jpg:boolean,
    tiff:boolean,
    psd:boolean,
    psb:boolean,
    png:boolean,
    gid:boolean
}

export type targetExtAction = {type:"target_check",prop:string,checked:boolean};

export type targetReducer = (state:ExtOptions,action:targetExtAction)=>ExtOptions;

const initTarget = {
    jpg:false,
    tiff:false,
    psd:false,
    psb:false,
    png:false,
    gid:false
}
export const targetExts:targetReducer = (state = initTarget,action)=>{
    switch(action.type){
        case"target_check":
            const stat = {...state};
            stat[action.prop];
            return stat;

        default:
            return state;
    }
}

const initSave = {
    jpg:false,
    tiff:false,
    psd:false,
    psb:false,
    png:false,
    gid:false
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

export type Options = {
    [key:string]:boolean,
    isSave:boolean,
    isAction:boolean,
    isExport:boolean
}

export type OptionAction = {type:"option_set",prop:string,checked:boolean};

export type OptionReducer = (state:Options,action:OptionAction)=>Options;

const initOptions = {
    isSave:false,
    isAction:false,
    isExport:false
}

export const options:OptionReducer = (state=initOptions,action) =>{
    switch(action.type){
        case"option_set":
            const stat = {...state};
            stat[action.prop] = action.checked;
            return stat;

        default:
            return state;
    }
}


export type Action = {
    name:string,
    index:number
};

export type ActionSet = {
    actions:Action[],
    name:string,
    index:number
}

export type ActionList = {
    actionsets:ActionSet[],
    actions:Action[],
    set:Action,
    action:Action
}


const initActionList:ActionList = {
    actionsets:[],
    actions:[],
    action:{name:"",index:0},
    set:{name:"",index:0}
};

export type SetActionList = {set:Action,action:Action,actions:Action[],actionsets:ActionSet[]};
export type ActionSetList = {type:"action_set"}&SetActionList;
export type ActionLoad = {type:"action_load",actionList:ActionList}

type ActionReducer = (state:ActionList,action:ActionSetList|ActionLoad)=>ActionList;

export const actionList:ActionReducer = (state=initActionList,action)=>{
    switch(action.type){
        case "action_load":
            return {...action.actionList};

        case "action_set":
            return {
                actionsets:[...action.actionsets],
                actions:[...action.actions],
                action:{...action.action},
                set:{...action.set}
            };

        default:
            return state;
    }
}

const initExportFolder = "";

export type ExportAction = {type:"exportFolder_set",folder:string};
export type ExportReducer = (state:string,action:ExportAction)=>string;

export const exportFolder:ExportReducer = (state=initExportFolder,action)=>{
    switch(action.type){
        case "exportFolder_set":
            return action.folder;

        default:
            return state;
    }
}