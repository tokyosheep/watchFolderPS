import * as React from "react"

import { Title } from "../../../styled/titles";
import { optionsContainer } from "../../../styled/container";

const HeaderWrapper = optionsContainer.header;

const Header = () =>{
    return(
        <HeaderWrapper>
            <Title>
                options
            </Title>
        </HeaderWrapper>
    )
}

export default Header;