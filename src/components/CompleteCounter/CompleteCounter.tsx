import Header from "../Header";
import Body from "./Body";
import Footer from "./Footer";

const CompleteCounter = () => {
    return (
        <>
            <Header retur={true}/>
            <Body />
            <Footer/>
        </>
    );
}

export default CompleteCounter;