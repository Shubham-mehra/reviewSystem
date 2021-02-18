import React from "react";
import Review_data from "../jsonfile/reviewtest.json"

class sidebar extends React.Component {
constructor(){
  super();
this.countrychange=this.countrychange.bind(this);
this.starChange=this.starChange.bind(this);
this.searchChange=this.searchChange.bind(this);
this.setStars=this.setStars.bind(this);
// this.state;
}
countrychange (e){
  console.log(e.target.value);
  // console.log(this.props.state.selectedCountry);
// this.props.seletedValues.state.setState({
//   selectedCountry:e.target.value
// })
this.props.countryHandler(e.target.value);
}

setStars(value){
  // console.log(e.target.value);
  this.props.ratingHandler(value);
}
starChange(e){
  // console.log(e.target.value);
  this.props.ratingHandler(e.target.value);
}
searchChange(e){
  // console.log(e.target.value);
  this.props.searchHandler(e.target.value);
}
  render(props){
console.log(props);
    var country_us=0;
    var country_uk=0;
    var country_germany=0;
    var country_japan=0;
    var country_Australia=0;
    var review_1=0;
    var review_2=0;
    var review_3=0;
    var review_4=0;
    var review_5=0;
    Review_data.map((reviewData)=>{
      if(reviewData.countryName.toLowerCase()==="us"||reviewData.countryName.toLowerCase()==="United States"){
                  country_us++;
        }else if(reviewData.countryName.toLowerCase()==="uk"||reviewData.countryName.toLowerCase()==="United Kingdom"){
          country_uk++;
      } else if(reviewData.countryName.toLowerCase()==="japan"){
        country_japan++;
    } else if(reviewData.countryName.toLowerCase()==="germany"){
      country_germany++;
  } else if(reviewData.countryName.toLowerCase()==="australia"){
    country_Australia++;
} 
  if(reviewData.rating==="1"){
    review_1++;
  }else if(reviewData.rating==="2"){
    review_2++;
  }else if(reviewData.rating==="3"){
    review_3++;
  }else if(reviewData.rating==="4"){
    review_4++;
  }else if(reviewData.rating==="5"){
    review_5++;
  }
  return 0;
  })  
    return (
     
        <div className="col-md-2" style={{borderTop:"1px solid #d1d1d1",borderRight:"1px solid #d1d1d1",paddingTop:"10px"}}>
        <input type="text" placeholder="search" className="form-control" onChange={this.searchChange} style={{borderRadius:"5px",fontSize:"13px"}}/>
        <br/>
        <select style={{borderRadius:"5px",fontSize:"10px"}} className="form-control">
         <option>All time</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
       </select>
       <br/>
        <select style={{borderRadius:"5px",fontSize:"10px"}} className="form-control"  onChange={this.starChange} >
         <option value="null">Filter by Rating</option>
         <option value="1">1 star</option>
         <option value="2">2 star</option>
         <option value="3">3 star</option>
         <option value="4">4 star</option>
         <option value="5">5 star</option>
       </select>
    <table width="100%">
      <tbody>
      <tr onClick={() => this.setStars("5")}>
          <td>   
            <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked" ></span>
       <span className="fa fa-star checked"></span>
       </td>
       <td style={{width:"70px"}}>
       <div className="progress">
   <div className="progress-bar" role="progressbar" aria-valuenow={348*100/1500}
   aria-valuemin="0" aria-valuemax="100" style={{width:review_5*100/1500}}>
     <span className="sr-only">70% Complete</span>
   </div>
 </div>
       </td>
       <td>{review_5}</td>
        </tr>
        <tr onClick={() => this.setStars("4")}>
          <td>   
            <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star"></span>
       </td >
       
       <td style={{width:"70px"}}>
       <div className="progress">
   <div className="progress-bar" role="progressbar" aria-valuenow="70"
   aria-valuemin="0" aria-valuemax="100" style={{width:review_4*100/1500}}>
     <span className="sr-only">70% Complete</span>
   </div>
 </div>
 </td>
       <td>{review_4}</td>
        </tr>
        <tr onClick={() => this.setStars("3")}>
          <td>   
            <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star"></span>
       <span className="fa fa-star"></span>
       </td>
       <td style={{width:"70px"}}>
       <div className="progress">
   <div className="progress-bar" role="progressbar" aria-valuenow="70"
   aria-valuemin="0" aria-valuemax="100" style={{width:review_3*100/1500}}>
     <span className="sr-only">70% Complete</span>
   </div>
 </div>
       </td>
       <td>{review_3}</td>
        </tr>
        <tr onClick={() => this.setStars("2")}>
          <td>   
            <span className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span>
       <span className="fa fa-star "></span>
       <span className="fa fa-star"></span>
       <span className="fa fa-star"></span>
       </td>
       <td style={{width:"70px"}}>
       <div className="progress">
   <div className="progress-bar" role="progressbar" aria-valuenow="70"
   aria-valuemin="0" aria-valuemax="100" style={{width:review_2*100/1500}}>
     <span className="sr-only">70% Complete</span>
   </div>
 </div>
       </td>
       <td>{review_2}</td>
        </tr>
        <tr onClick={() => this.setStars("1")}>
          <td>   
            <span className="fa fa-star checked"></span>
       <span className="fa fa-star "></span>
       <span className="fa fa-star "></span>
       <span className="fa fa-star"></span>
       <span className="fa fa-star"></span>
       </td>
       <td style={{width:"70px"}}>
       <div className="progress">
   <div className="progress-bar" role="progressbar" aria-valuenow="70"
   aria-valuemin="0" aria-valuemax="100" style={{width:review_1*100/1500}}>
     <span className="sr-only">70% Complete</span>
   </div>
 </div>
       </td>
       <td>{review_1}</td>
        </tr>
 
      </tbody>
    </table>
       
       <br/>
        <select style={{borderRadius:"5px",fontSize:"10px"}} className="form-control">
         <option>Filter by Version</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
       </select>
      <table className="table">
        <tbody>
          <tr>
          <td>
              1.2.0
           </td>
           <td>
              8
            </td>
          </tr>
          <tr>
          <td>
              1.1.4
           </td>
           <td>
              12
            </td>
          </tr>
          <tr>
          <td>
              1.1.0
           </td>
           <td>
              3
            </td>
          </tr>
          <tr>
          <td>
              1.0
           </td>
           <td>
              5
            </td>
          </tr>
        </tbody>
      </table>
       <br/>
        <select style={{borderRadius:"5px",fontSize:"10px"}} className="form-control" 
        // value={props.seletedValues.states.selectedCountry} 
        onChange={this.countrychange}>
         <option value="null">Filter by Country</option>
         <option value="US">United states</option>
         <option value="Japan">Japan</option>
         <option value="Germany">Germany</option>
         <option value="UK">United Kingdom</option>
         <option value="Australia">Australia</option>
         
       </select>
       <br/>
       <table className="table">
        <tbody>
          <tr>
          <td>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="Image_filler" style={{width:"20px",height:"10px"}}/>
           </td>
           <td>
             United States
           </td>
           <td>
              {country_us}
            </td>
          </tr>
          <tr>
          <td>
          <img alt="Image_filler" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" style={{width:"20px",height:"10px"}}/>
 
           </td>
           <td>
             United Kingdom
           </td>
           <td>
           {country_uk}
            </td>
          </tr>
          <tr>
          <td>
          <img alt="Image_filler" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" style={{width:"20px",height:"10px"}}/>
 
           </td>
           <td>
              Germany
           </td>
           <td>
           {country_germany}
            </td>
          </tr>
          <tr>
          <td>
          <img alt="Image_filler" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" style={{width:"20px",height:"10px"}}/>
 
           </td>
           <td>
             Japan
           </td>
           <td>
           {country_japan}
            </td>
          </tr>
          <tr>
          <td>
          <img alt="Image_filler" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" style={{width:"20px",height:"10px"}}/>
 
           </td>
           <td>
           Australia
           </td>
           <td>
           {country_Australia}
            </td>
          </tr>
        </tbody>
      </table>
           </div>
    );

}
  
}
export default sidebar;