import React from "react";
import ReviewBlock from "./reviewblock";
import Review_data from "../jsonfile/reviewtest.json"

function reviewSeaction(props){
    // const country_us=0;
    var filteredProduct=[];
    var filtereddata=[];
    console.log(props.reviewdata.states);
    if(props.reviewdata.states.selectedProduct!=="null"){
        Review_data.map((item) =>{if(item.appID===props.reviewdata.states.selectedProduct){ filteredProduct.push(item); } return 0;});
    } 
    else
{
filteredProduct=Review_data;
}
if(props.reviewdata.states.selectedCountry!=="null"){
    // var filtereddata=[];
    filteredProduct.map((item) =>{if(item.countryName===props.reviewdata.states.selectedCountry){filtereddata.push(item)}return 0;});
}
else
{
filtereddata=filteredProduct;
}
// console.log(filteredProduct);

if(props.reviewdata.states.selectedStar!=="null"){
    var Rating_filter=[];
    filtereddata.map((item) =>{if(item.rating===props.reviewdata.states.selectedStar){Rating_filter.push(item)}return 0;});
    filtereddata=Rating_filter;
}
if(props.reviewdata.states.selectValue.trim()!==""){
var searchfilter=[];
filtereddata.map((item)=>{
    if(
        item.appStoreName.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
        ||item.reviewHeading.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
        ||item.appStoreName.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
        ||item.countryName.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
        ||item.reviewText.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
        ||item.reviewUserName.trim().toLowerCase().includes(props.reviewdata.states.selectValue)
    )
    {
        searchfilter.push(item);
    }
    
    filtereddata=searchfilter;
    return 0;
})
}

if(props.reviewdata.states.selectDate!=="null"){
    if(props.reviewdata.states.selectDate==="Newest"){
        filtereddata=filtereddata.sort((a,b)=>Date.parse(a.reviewDate)-Date.parse(b.reviewDate));
    }
    else{
        filtereddata=filtereddata.sort((a,b)=>Date.parse(a.reviewDate)-Date.parse(b.reviewDate));
        filtereddata=filtereddata.reverse();
    }
}

// filtereddata=filtereddata.sort((a, b) => b.reviewDate - a.reviewDate);


// else
// {
// filtereddata=Review_data;
// }

    // console.log(filtereddata);
    // filtereddata=["hello"];
    return(
        <div  style={{marginTop:"20px"}}>
            <div className="row">
                <div className="col-md-8" style={{textAlign:"left"}}>Viewing 1-10 of 157 Review</div>
                <div className="col-md-4">
                    <div className="row"style={{textAlign:"right"}} >
                        <div className="col-md-6" >
                        <select style={{borderRadius:"5px",fontSize:"10px"}} className="form-control">
         <option>Create Alert</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
       </select>
                        </div>
                        <div className="col-md-6" >
                            <div className="btn-group" role="group" aria-label="Basic example" >
  <button type="button" className="btn btn-default" style={{fontSize:"10px",borderBottom:"1px solid #d1d1d1",borderTop:"1px solid #d1d1d1",borderLeft:"1px solid #d1d1d1"}}><i className="fa fa-rss" aria-hidden="true"></i></button>
    <button type="button" className="btn btn-default" style={{fontSize:"10px",borderBottom:"1px solid #d1d1d1",borderTop:"1px solid #d1d1d1"}}>	&#123;&nbsp;&#125;</button>
  <button type="button" className="btn btn-default" style={{fontSize:"10px",borderBottom:"1px solid #d1d1d1",borderTop:"1px solid #d1d1d1",borderRight:"1px solid #d1d1d1"}}><i className="fa fa-download"></i></button>
</div>
                        </div>
                    </div>
                </div>
{/* tset */}
            </div>
            {/* {props.reviewdata.states.selectDate} */}
            {/* <ReviewBlock userdata={{id:"test"}}/> */}
            {filtereddata.map(user => <ReviewBlock  key={user.id}userdata={{ id: user.id,
        appID: user.appID,
        appStoreName: user.appStoreName,
        reviewDate: user.reviewDate,
        rating: user.rating,
        version: user.version,
        countryName: user.countryName,
        reviewHeading:user.reviewHeading,
        reviewText: user.reviewText,
        reviewUserName: user.reviewUserName}}/>)}
            
        </div>
    )
}
export default reviewSeaction;