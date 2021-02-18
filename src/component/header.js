import React from "react";
import Logo from "../image/demo1.png";
function Header(){
    // const paddingStyle={
    //     padding:"0px"
    // }
    const imageSection={
        backgroundColor:"white"
    }
    // const manuBarSection={
    //     backgroundColor:"white",
    //     padding:"0px"
    // }
   
    return (
    <div className="row" id="menubar" style={{backgroundColor:"black"}} >
       <div className="col-md-12"  style={imageSection}>
           <img className="logo" alt="Image_filler" src={Logo} />
       </div>
    </div>
    )
}
export default Header;
