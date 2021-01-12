import { combineReducers , createStore } from "redux";
import { targetExts , saveExts , options , actionList , exportFolder } from "../reducer/options";
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