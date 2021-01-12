import * as React from "react";
import styled from "styled-components";

import { CheckBox } from "./type";

const SwitchWrapper = styled.label`
    display: block;
    position: relative;
    width: 30px;
    height: 15px;
    cursor: pointer;
`;

const InputBox = styled.input`
    display: none;
`;

const Line = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 3px;
    border: 1px solid #fff;
    top: 50%;
    left: 0;
    transform:translateY(-50%);
    z-index: 3;
    position: absolute;
`;

const Ball = styled.div<{checked:boolean}>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    z-index: 5;
    top: 50%;
    transition: left .3s linear;
    left: ${props=> props.checked ? "20px" : "0px"};
    transform:translateY(-50%);
`;

export const SwitchBox:(props:CheckBox<{prop:string}>)=>JSX.Element = props =>{
    return(
        <SwitchWrapper>
            <InputBox type="checkbox" checked={props.checked} onChange={(e)=>props.func(e,props.arg)}></InputBox>
            <Line></Line>
            <Ball checked={props.checked}></Ball>
        </SwitchWrapper>
    )
}

const disabledColor = "#999";

const CheckBoxWrapper = styled.label<{checked:boolean,disabled:boolean}>`
    display: block;
    border: 1px solid ${props=>props.disabled ? disabledColor : "#fff"};
    padding: 3px;
    background: ${props=> props.checked ? "#555" : "#000"};
    cursor: pointer;
    transition: .3s linear;
`;

const TextName = styled.div<{disabled:boolean}>`
    color: ${props=>props.disabled ? disabledColor : "#fff"};
    font-size: 12px;
`;

export const CheckBoxCompo:(props:CheckBox<{prop:string}>&{disabled:boolean})=>JSX.Element = props =>{
    return(
        <CheckBoxWrapper checked={props.checked} disabled={props.disabled}>
            <InputBox type="checkbox" checked={props.checked} onChange={(e)=>props.func(e,props.arg)}></InputBox>
            <TextName disabled={props.disabled}>{props.name}</TextName>
        </CheckBoxWrapper>
    )
}