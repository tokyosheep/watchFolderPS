import * as React from "react";
import { useCallback } from "react";
import styled from "styled-components";

import { IoFolderOutline } from "react-icons/io5";

const FolderWrapper = styled.div`
    width: 80%;
    height: 50px;
    background:#444;
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
    color: ${props=> props. disabled ? disabledColor : "#fff"};
`;


const FolderCompo:(props:{folder:string,clickFunc:(disabled:boolean)=>void}&{disabled:boolean})=>JSX.Element = ({folder,clickFunc,disabled}) =>{
    return(
        <FolderWrapper>
            <FolderIcon onClick={()=>clickFunc(disabled)} disabled={disabled}></FolderIcon>
            <FolderPath disabled={disabled}>
                {folder}
            </FolderPath>
        </FolderWrapper>
    )
}

export default FolderCompo;