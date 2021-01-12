import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configStore from "./redux/store/store";

const store = configStore();
import Layout from "./pages/layout";

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>    
    ,
    document.getElementById("root")
);