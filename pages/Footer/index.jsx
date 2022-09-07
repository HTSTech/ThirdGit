
  import { useEffect } from 'react'
  import axios from 'axios'
  
  export default function Footer() {
  
    useEffect(() => {
      //getData();
      eval(;)
    }, [])
   
    async function getData() {
      
      axios.get("./api/Footer").then(res=>{
        console.log("res=> ",res);
        document.getElementById("FooterID").innerHTML = res.data;
        
        //* css
        axios.post("./api/Footer", {"action": "Get-Css"}).then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("FooterID").appendChild(createCssElement)
          axios.post("./api/Footer", {"action": "Get-js"}).then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='FooterID'>
        <body id="igsx"><div id="irr8">Footer</div></body>
        <style>
          * { box-sizing: border-box; } body {margin: 0;}#irr8{padding:10px;}
        </style>
      </div>
    )
  }