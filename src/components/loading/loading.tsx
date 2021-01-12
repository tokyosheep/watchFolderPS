import * as React from "react";
import styled,{ keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/stateType";

import { containerHeight } from "../../styles/containers";

const LoadingWrapper = styled.div<{isWatch:boolean}>`
    width: 100vw;
    height: ${containerHeight}px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    display: ${props=> props.isWatch ? "block" : "none"};
    color: #fff;
    text-align:center;
    z-index: 20;
`;

const fading = keyframes`
    0%{
        opacity: 1;
    }

    50%{
        opacity: 0.5;
    }

    100%{
        opacity: 1;
    }
`

const LoadText = styled.div`
    display: block;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate( -50% , -20%);
    animation: ${fading} 1.3s linear infinite;
`;

const expanding = keyframes`
    0%{
        transform: translate( -50% , -50%) scale(1);
    }

    50%{
        transform: translate( -50% , -50%) scale(0.5);
    }

    100%{
        transform: translate( -50% , -50%) scale(1);
    }
`;

const Circle = styled.div`
    display: block;
    width: 130px;
    height: 130px;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    position: absolute;
    background: radial-gradient(rgba(255,255,255,1) , rgba(255,255,255,0));
    filter: blur(30px);
    animation: ${expanding} 1.8s linear infinite;
`;

const CircleLine = styled.div`
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate( -50% , -50%);
    border: 1px solid #fff;
    position: absolute;
    border-radius: 50%;
    animation: ${expanding} 1.3s linear infinite;
`;

const LoadingLayer = () =>{
    const isWatch = useSelector((state:StateType)=>state.watchFlag);
    return(
        <LoadingWrapper isWatch={isWatch}>
            <Circle></Circle>
            <CircleLine></CircleLine>
            <LoadText>
                loading
            </LoadText>
        </LoadingWrapper>
    )
}

export default LoadingLayer;