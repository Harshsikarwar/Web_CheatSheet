import {gettingStarted} from "../scripts/gettingStarted.js";
import { pythonCheatSheet } from "./pythonCheatSheet.js";

let topic = document.querySelectorAll(".sideOptionDetail");
let doc = document.getElementById("document");

function clearDoc(){
    doc.innerHTML = "";
}

topic.forEach(Element =>{
    Element.addEventListener('click',(event)=>{
        let selectTopic = event.target.firstChild.innerText;
        clearDoc();
        if(selectTopic == "Getting Started"){
            gettingStarted();
        }
        else if(selectTopic == "Python"){
            pythonCheatSheet();
        }
        else{
            doc.innerHTML=`
                <h1>CheatSheet is under creation 👷‍♂️</h1>
            `
        }
    })
})

gettingStarted();