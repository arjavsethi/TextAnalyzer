import React,{useState} from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
 
 
const handleCopy = ()=>{

  var text = document.getElementById("mybox")
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handleUpClick= ()=>{
  
  // console.log("button was clicked");
  
  let newText = text.toUpperCase();
  setText(newText);
}

const handleClear= ()=>{
  
  // console.log("button was clicked");
  
  let newText = ""
  setText(newText);
}

const handleloClick = ()=>{
    console.log("button was clicked")

    let x  = text.toLowerCase();
    setText(x);

}
 const handleOnChange= (event)=>{
  // console.log("on cahnge was fired"); #042743
  setText(event.target.value)
 }
 
  return (
    <>
    
      <div className="form-floating my-10 container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2 className="container" >{props.heading} </h2>
<textarea  className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==="dark"?"grey":"white",height:"200px"}}></textarea>
   
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
      </div>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h3>More Info</h3>
      <p>{(0.05*(text.split(" ").length))} minutes for reading <br />
      {text.split(" ").length} words and {text.length} character</p>


      </div>
    </>
  );
}
