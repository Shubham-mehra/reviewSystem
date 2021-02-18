import React from "react";
// import reviewSeaction from "./reviewbody";
function reviewBlock(props){
    const reviewStars=[];
    for(var i=1;i<=5;i++){
        if(i<=props.userdata.rating){
        reviewStars.push(<span className="fa fa-star checked" key={i} style={{fontSize:"15px"}}></span>);   
        }
        else{
        reviewStars.push(<span className="fa fa-star" key={i}style={{fontSize:"15px"}}></span>);   
        }
    }
    return(
        <div className="panel panel-default" style={{borderRadius:"5px",marginTop:"20px", 
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        textAlign: "center",padding:"10px"}} >
  <div className="panel-body row " >
     
  <div className="col-md-2" style={{padding:"0px"}}>
  <ul className="list-group list-group-horizontal borderless" style={{textAlign:"center"}} >
  <li className="list-group-item" style={{width: "25px", height: "25",padding:"2px",backgroundColor: "green", borderRadius: "5px", marginLeft: "10px"}}></li>
    <li className="list-group-item" style={{height:"25px",padding:"2px",backgroundColor:"#d1d1d1",borderRadius:"2px",marginLeft:"10px"}}>{props.userdata.appStoreName}</li>
    </ul>
 </div>
      <div className="col-md-5"style={{width:"25px",height:"25px",borderRadius:"2px",textAlign:"left",fontSize:"13px"}}><p><strong>{props.userdata.reviewHeading}</strong></p> </div>
      <div className="col-md-3"style={{width:"25px",height:"25px",borderRadius:"2px"}}> 
      {reviewStars}
     </div>
      <div className="col-md-2"style={{width:"25px",height:"25px",borderRadius:"2px",textAlign:"right",fontSize:"13px"}}>translation</div>
  </div>
  <div className="col-md-12" style={{textAlign:"left", padding:"10px"}}>
  {props.userdata.reviewText}
  </div>
  <div className="row">
  <div className="col-md-6" style={{padding:"0px"}} >
     <ul className="list-group list-group-horizontal" style={{textAlign:"center"}} >
        <li className="list-group-item" style={{padding:"2px",marginLeft: "10px",border:"none"}}>by {props.userdata.reviewUserName} </li>
        <li className="list-group-item" style={{padding:"2px",marginLeft:"10px",border:"none"}}>{props.userdata.reviewDate} ago</li>
        <li className="list-group-item" style={{padding:"2px",marginLeft:"10px",border:"none"}}>{props.userdata.version}</li>
        <li className="list-group-item" style={{padding:"2px",marginLeft:"10px",border:"none"}}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="Image_filler" style={{width:"20px",height:"10px"}}/>&nbsp;{props.userdata.countryName} </li>
    </ul>
</div> 
<div className="col-md-6" >
    <ul className="list-group list-group-horizontal" style={{float:"right"}} >
        <li className="list-group-item" style={{padding:"2px",marginLeft: "10px",border:"none"}}>reply</li>
        <li className="list-group-item" style={{padding:"1px",marginLeft:"10px",border:"none"}}> 
            <select style={{borderRadius:"5px",fontSize:"8px",height:"15px",padding:"0px"}} className="form-control">
                <option>share</option>
                <option>facebook</option>
                <option>instagram</option>
                <option>whatsapp</option>
            </select>
        </li>
    </ul>
</div>
</div>
</div>
    )
}
export default reviewBlock;