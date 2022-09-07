
  import { useEffect } from 'react'
  import axios from 'axios'
  
  export default function Home() {
  
    useEffect(() => {
      //getData();
      eval(;)
    }, [])
   
    async function getData() {
      
      axios.get("./api/Home").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HomeID").innerHTML = res.data;
        
        //* css
        axios.post("./api/Home", {"action": "Get-Css"}).then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HomeID").appendChild(createCssElement)
          axios.post("./api/Home", {"action": "Get-js"}).then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HomeID'>
        <body id="igsx"><div id="irr8">Home</div></body>
        <style>
          * { box-sizing: border-box; } body {margin: 0;}#irr8{padding:10px;}
        </style>
      </div>
    )
  }