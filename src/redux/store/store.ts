import { combineReducers , createStore } from "redux";
import { options , actionList , exportFolder } from "../reducer/options";
import { targetExts , saveExts } from "../reducer/ext";
import { watchFolder , watchFlag } from "../reducer/watch";

const rootReducer = combineReducers({
    targetExts,
    saveExts,
    options,
    actionList,
    watchFolder,
    exportFolder,
    watchFlag
});

const configStore = () => createStore(rootReducer);

export default configStore;