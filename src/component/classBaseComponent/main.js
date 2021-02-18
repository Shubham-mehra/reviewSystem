import React from "react";
import ImageClassbase from "./imageloopwithmap"
import Test1 from "./testclassbase1"
import Test2 from "./loginstateconditionaltest"
import Test3 from "./eventHandlertochangestate"
import EventHandler from "./eventhandlerwithimagebutton"
import Componentdidmount from "./componentDidMount"
class Main extends React.Component{
    render(){
        return(
            <div>
                
            <ImageClassbase/>
            <Test1/>
            <Test2/>
            <Test3/>
            <EventHandler/>

            <br/>
            <br/>
            <h3>This is Life cycle function</h3>
            <Componentdidmount/>
            </div>
        )
    }
}
export default Main;