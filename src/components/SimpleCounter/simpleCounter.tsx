import Footer from "../CompleteCounter/Footer";
import Header from "../Header";
import Body from "./Body";

const SimpleCounter = () => {
    return ( 
        <>
            <Header retur={true}/>
            <Body/>
            <Footer simple={true}/>
        </>
     );
}
 
export default SimpleCounter;