import GettingStarted from "../storage/GettingStarted.json" with {type:"json"};

export function gettingStarted(){
    let doc = document.getElementById("document");
    for(let key in GettingStarted){
        for (let content in GettingStarted[key]){
            
            if(content == "title"){
                let title = document.createElement("h1");
                title.setAttribute("class", "docTitle");
                title.innerText = GettingStarted[key][content];
                doc.appendChild(title);
            }
            else if(content == "subtitle"){
                let subtitle = document.createElement("h3");
                subtitle.setAttribute("class", "docSubTitle");
                subtitle.innerText = GettingStarted[key][content];
                doc.appendChild(subtitle);
                
            }
            else if(content == "content"){
                let docContent = document.createElement("div");
                docContent.setAttribute("class", "docContent");
                
                GettingStarted[key][content].forEach(element => {
                    for(let contentkey in element){
                        if(contentkey == "subsubtitle"){
                            let subtitle = document.createElement("h5");
                            subtitle.setAttribute("class", "docSubSubTitle");
                            subtitle.innerText = element[contentkey];
                            docContent.appendChild(subtitle);
                        }
                        else if(contentkey == "text"){
                            let subtitle = document.createElement("p");
                            subtitle.setAttribute("class", "docText");
                            subtitle.innerText = element[contentkey];
                            docContent.appendChild(subtitle);
                        }
                    }
                });
                doc.appendChild(docContent);
            }
            else if(content == "text"){
                let text = document.createElement("p");
                text.setAttribute("class", "docText");
                text.innerText = GettingStarted[key][content];
                doc.appendChild(text);
            }
        }
    }
}
