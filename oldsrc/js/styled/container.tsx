import styled,{ css } from "styled-components";

const compoWidth = "85%";
const paneHeight = 500;

const compoStyle = css`
    width: ${compoWidth};
    padding: 10px;
    margin: 4px auto; 
    box-sizing:border-box;
    border-radius: 5px;
    background: rgba(60,60,60,0.2);
`;

export const optionsContainer = {
    container:styled.div`
        width: 100vw;
        height: 100vh;
        background: #202020;
    `,
    header:styled.header`
        width: 100%;
        height: 30px;
    `,
    targetExt:styled.div`
        height: 50px;
        ${compoStyle}
    `,
    save:styled.div`
        height: 100px;
        ${compoStyle}
    `,
    action:styled.div`
        height: 100px;
        ${compoStyle}
    `,
    export:styled.div`
        height: 100px;
        ${compoStyle}
    `
}

export const watchContainer = {
    container:styled.div`
        width: 100%;
        height: 100%;
    `,
    main:styled.main`
        height: 200px;
        width: 100%;
    `
}