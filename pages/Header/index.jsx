
  import { useEffect } from 'react'
  import axios from 'axios'
  
  export default function Header() {
  
    useEffect(() => {
      //getData();
      eval(;)
    }, [])
   
    async function getData() {
      
      axios.get("./api/Header").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HeaderID").innerHTML = res.data;
        
        //* css
        axios.post("./api/Header", {"action": "Get-Css"}).then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HeaderID").appendChild(createCssElement)
          axios.post("./api/Header", {"action": "Get-js"}).then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='HeaderID'>
        <body id="igsx"><div id="irr8">Header</div></body>
        <style>
          * { box-sizing: border-box; } body {margin: 0;}#irr8{padding:10px;}
        </style>
      </div>
    )
  }