import * as React from "react";
import WatchMain from "../components/watchPanel/watchMain";
import { watchContainer } from "../styled/container";
const Container = watchContainer.container;

const WatchLayout = () =>{
    return(
        <Container>
            <WatchMain />
        </Container>
    )
}

export default WatchLayout;