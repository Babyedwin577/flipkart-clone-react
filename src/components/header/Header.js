import { Nav } from "./Nav"
import './header.css'; 
import { Searchbar } from "./Searchbar";
import { UseIfMobile } from "../../hooks/UseIfMobile";
import { DesktopNav } from "./DesktopNav";
function Header() {
  const isMobile=UseIfMobile() 
  return (
    <div>
        {
          isMobile?(
          <>
          <Nav/>
          <Searchbar/>
          </>)
          :(
          <>
          <DesktopNav/>
          </>)
        }
    </div>
  )
}

export default Header
