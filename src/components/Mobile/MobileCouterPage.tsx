import Header from "../Header";
import MobileCouter from "./MobileCouter";

const MobileCouterPage = () => {
    return ( 
        <div className="flex flex-col justify-center gap-10">
            <Header retur={true}/>
            <MobileCouter/>
        </div>
     );
}
 
export default MobileCouterPage;