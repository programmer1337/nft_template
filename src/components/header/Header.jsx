import {useMediaQuery} from "react-responsive";
import DesktopHeader from "./desktopHeader/DesktopHeader";
import MobileHeader from "./mobileHeader/MobileHeader";

const Header = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    return (
        <>
            {
                isDesktop ? <DesktopHeader/> : <MobileHeader/>
            }
        </>
    )
}

export default Header;