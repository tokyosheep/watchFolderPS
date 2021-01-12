import * as React from "react";
import { CheckBox } from "../parts/type";
import styled from "styled-components";
import { CenterPosition } from "../../styles/commonStyle";

const Label = styled.label<{checked:boolean,disabled:boolean}>`
    height: 20px;
    font-size: 10px;
    color:${props=>props.disabled ? "#aaa" : "#fff"};
    position: relative;
    display: block;
    background: ${props=> props.checked ? "#777" : "#000"};
    transition: .3s linear;
    cursor: pointer;
`;

const Input = styled.input`
    display: none;
`;

const KeyName = styled.div`
    ${CenterPosition}
`;

export const CheckExtBox:(props:CheckBox<{prop:string}>&{disabled:boolean})=>JSX.Element = ({checked,arg,func,name,disabled}) =>{
    return(
        <Label checked={checked} disabled={disabled}>
            <Input onChange={(e)=>func(e,arg)} checked={checked} type="checkbox" disabled={disabled}></Input>
            <KeyName>{name}</KeyName>
        </Label>
    )
}