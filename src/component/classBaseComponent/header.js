import React from "react";
class HeaderClass extends React.Component{
    render(){
        const styleforclassmenu={
                backgroundColor:"#f1f1f1",
                color:"#d2b1d8",
                
        }
       return(
        <div> 
        <ul  style={styleforclassmenu} className="col-md-12 classmenubar">
            <li>
                Class
            </li>
            <li>
                Base
            </li>
            <li>
                Component
            </li>
        </ul>
    </div>
       );
    }

}
export default HeaderClass;