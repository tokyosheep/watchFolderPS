import styled,{ css } from "styled-components";


const wrapperHeights = [50 + 120 + 150 + 160];
export const containerHeight = wrapperHeights.reduce((acc,current)=>acc += current,0) + 10;
//width 210

const asideStyle = css`
    box-sizing:border-box;
    padding-right:10px;
`;

const containerStyle = css`
    background: #333;
    border-radius: 5px;
    padding: 5px;
`;

export const containers = {
    Container:styled.div`
        width: 100vw;
        height: 100vh;
        background: #202020;
        display:grid;
        grid-template-rows: ${wrapperHeights[0]}px ${wrapperHeights[1]}px ${wrapperHeights[2]}px ${wrapperHeights[3]}px 30px;
        grid-template-columns:100px 250px;
        grid-template-areas:
            "target header"
            "target main"
            "save action"
            "save export"
            "footer footer"
        ;
        gap: 5px 0px;
    `,
    Header:styled.header`
        width: 100%;
        height: 30px;
        grid-area:header;
    `,
    Main:styled.main`
        grid-area:main;
        ${containerStyle}
    `,
    TargetExts:styled.aside`
        grid-area:target;
        ${asideStyle}
    `,
    SaveExts:styled.aside`
        grid-area:save;
        ${asideStyle}
    `,
    Export:styled.div`
        grid-area:export;
        ${containerStyle}
    `,
    Action:styled.div`
        grid-area:action;
        background-color:#444;
        border-radius:5px;
    `,
    Footer:styled.footer`
    grid-area:footer;
    `,
    
}