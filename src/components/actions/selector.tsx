import * as React from "react";
import styled from "styled-components";
import { SetActionList , Action , ActionSet } from "../../redux/reducer/options";

const SelectorStyle = styled.select<{disabled:boolean}>`
    width: 90%;
    display: block;
    appearance: none;
    border: solid 1px #aaa;
    color: ${props=> props.disabled ? "#aaa" : "#fff"};
    padding: 5px;
    margin-bottom: 5px;
    background: #161515;
    transition: .3s linear;
    &:focus{
        outline: none;
    }
    & > option{

    }
`;

type SelectProps = {
    options:{name:string,index:number,actions?:Action[]}[],
    func:(e:React.ChangeEvent<HTMLSelectElement>,value:Action|ActionSet)=>void,
    value:Action|ActionSet,
    disabled:boolean
}

const ActionSelectorForm:(props:SelectProps)=>JSX.Element = ({options,func,value,disabled}) =>{
    const optionList = options.map((op,i)=><option key={i}>{op.name}</option>);
    return(
        <SelectorStyle value={value.name} onChange={(e)=>func(e,value)} disabled={disabled}>
            {optionList}
        </SelectorStyle>
    )
}

export default ActionSelectorForm;