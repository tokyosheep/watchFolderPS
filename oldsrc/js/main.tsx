const { entrypoints } = require("uxp");
const { app } = require("photoshop");

import { optionsPanelRender , watchPanelRender } from "./render";

const reloadPlugin = () => app.showAlert("open plugin");

entrypoints.setup({
    plugin:{
        create(plugin:any){console.log(plugin);},
        destroy(){console.log("destroyed");}
    },
    commands:{
        reloadPlugin:reloadPlugin,
    },
    panels:{
        watchOptions:{
            show(e:any){
                console.log(e);
                const root = optionsPanelRender();
                e.node.appendChild(root);
            }
        },
        watchPanel:{
            show(e:any){
                const root = watchPanelRender();
                e.node.appendChild(root);
            }
        }
    }
});