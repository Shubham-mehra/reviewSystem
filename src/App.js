import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Headers from "./component/header"
import Footer from "./component/footer"
import SIDEBAR from "./component/sidebar"
import ReviewSection from "./component/reviewbody"
// import Review_data from "./jsonfile/reviewtest.json"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      selectedCountry:"null",
      selectedVersion:"",
      selectedStar:"null",
      selectedProduct:"null",
      selectValue:"",
      selectDate:"null"
    };
   this.setCountry=this.setCountry.bind(this);
   this.setRating=this.setRating.bind(this);
    this.setProduct=this.setProduct.bind(this);
    this.searchValue=this.searchValue.bind(this);
    this.setDate=this.setDate.bind(this);
    // this.changeDisplay=this.changeDisplay.bind(this);
}
setCountry(data){
  this.setState({
    selectedCountry:data
    
  })
  console.log(this.state);
  }
  setDate(e){
    console.log(e.target.value);
this.setState({
  selectDate:e.target.value
})
  }
  searchValue(data){
    this.setState({
      selectValue:data
    })
  }
  setProduct(e){
    console.log(e.target.value);
    this.setState({
      selectedProduct:e.target.value
    
    })
    console.log(this.state);
    }
setRating(data){
  console.log("appjs"+data);
  this.setState({
    selectedStar:data
  })
  }

  render(){
    const paddingStyle={padding:"0px"}
  const selectStyle={width:"89%",height:"50%",fontSize:"13px"}
  
    return (
      <div style={paddingStyle} className="App">
  
       <Headers/>
       <div className="col-md-12" style={{marginTop:"20px",marginBottom:"20px"}}>
         <div className="row">
           <div className="col-md-8">
           <label style={{float:"left",fontSize:"10px"}}  >Select products</label><br/>
        <select style={selectStyle} className="form-control" onChange={this.setProduct}>
          <option value="null">Select Product</option>
          <option value="com.amazon">Amazon</option>
          <option value="com.flipkart">Flipkart</option>
          <option value="com.myntra">Myntra</option>
          <option value="com.google">Google</option>

        </select>
           </div>
           <div className="col-md-4">
             <div className="row">
             <div className="col-md-6">
           <label style={{float:"left",fontSize:"10px"}}  >Sorting</label><br/>
        <select style={selectStyle} className="form-control" onChange={this.setDate}>
          <option value="null">Select method</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
         
        </select>
           </div>
           <div className="col-md-6">
           <label style={{float:"left",fontSize:"10px"}}  >traslation </label><br/>
        <select style={selectStyle} className="form-control">
          <option>myapp +2</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
           </div>
             </div>
           </div>
         </div>
       </div>
       <div className="row" style={{fontSize:"10px"}}>
           {/* code for the select product in side bar -start here */}
  <SIDEBAR seletedValues={{states:this.state}} countryHandler={this.setCountry} ratingHandler={this.setRating} searchHandler={this.searchValue} dateHandler={this.setDate}/>
       
           {/* code for the select product in side bar-end here  */}
  
       <div className="col-md-10" style={{borderTop:"1px solid #d1d1d1"}}>
         <ReviewSection reviewdata={{states:this.state}}/>
       </div>
  
       </div>
       <Footer/>
     
      </div>
    );
  }
}

export default App;

