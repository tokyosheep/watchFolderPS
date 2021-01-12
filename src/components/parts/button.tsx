import * as React from "react";
import styled from "styled-components";

import { Button } from "./type";

const ButtonStyle = styled.button`
    width: 100px;
    height: 20px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 3px;
    background: #000;
`;

export const MainButton:(props:Button)=>JSX.Element = ({name,func}) =>{
    return(
        <ButtonStyle onClick={func}>{name}</ButtonStyle>
    )
}