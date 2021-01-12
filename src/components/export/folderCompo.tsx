import * as React from "react";
import styled from "styled-components";

import { IoFolderOutline } from "react-icons/io5";

const FolderWrapper = styled.div`
    width: 90%;
    height: 50px;
    background:#444;
    border-radius: 5px;
    padding: 5px;
`;

const disabledColor = "#999";

const FolderIcon = styled(IoFolderOutline)<{disabled:boolean}>`
    stroke:${props=> props. disabled ? disabledColor : "#fff"};
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const FolderPath = styled.div<{disabled:boolean}>`
    width: 90%;
    height: auto;
    font-size: 13px;
    color: ${props=> props.disabled ? disabledColor : "#fff"};
`;

type PropsType = {
    path:string,
    func:(e:React.MouseEvent)=>void,
    disabled:boolean
}

const FolderCompo:(props:PropsType)=>JSX.Element = ({path,func,disabled=false}) =>{
    return(
        <FolderWrapper>
            <FolderIcon disabled={disabled} onClick={func}></FolderIcon>
            <FolderPath disabled={disabled}>
                {path}
            </FolderPath>
        </FolderWrapper>
    )
}

export default FolderCompo;