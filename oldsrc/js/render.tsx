import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import OptionLayout from "./pages/optionLayout";
import WatchLayout from "./pages/watchLayout";
import configStore from "./redux/store/store";

const store = configStore();

export const optionsPanelRender = () =>{
    const root = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <OptionLayout />
        </Provider>,
        root
    );
    return root;
}

export const watchPanelRender = () =>{
    const root = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <WatchLayout />
        </Provider>,
        root
    );
    return root;
}