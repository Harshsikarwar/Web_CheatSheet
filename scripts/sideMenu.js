import menu from '../storage/MenuData.json' with { type: 'json' };

localStorage.setItem("currOption",menu[0]["option"]);

let currOption = localStorage.getItem("currOption");

let sideMenu = document.getElementById("sideMenu");

for(let key in menu){
    let sideOption = document.createElement("div");
    sideOption.setAttribute("class","sideOptions");

    let sideOptionDetail = document.createElement("div");
    sideOptionDetail.setAttribute("class","sideOptionDetail");

    let sideBox = document.createElement("div");
    sideBox.setAttribute("class","sideBox");

    let sideOptionName = document.createElement("span");
    sideOptionName.innerText = menu[key]["option"];
    sideOptionName.setAttribute("class", "sideOptionName");
    sideOptionName.setAttribute("id", menu[key]["option"]);

    let sideOptionBtn = document.createElement("div");
    sideOptionBtn.setAttribute("class", "sideOptionBtn");

    let sideOptionBtnImg = document.createElement("img");
    sideOptionBtnImg.setAttribute("class", "sideOptionBtnImg");
    sideOptionBtnImg.setAttribute("id", menu[key]["option"]+"Btn");
    sideOptionBtnImg.setAttribute("src","../images/angle-small-right.png");
    sideOptionBtn.appendChild(sideOptionBtnImg);

    let vr = document.createElement("div");
    vr.setAttribute("style","display:none;");
    vr.setAttribute("id", menu[key]["option"]+"_subSideOptionVr");
    vr.setAttribute("class","vr");

    let sideSubOptions = document.createElement("ul");
    sideSubOptions.setAttribute("style", "display:none;");
    sideSubOptions.setAttribute("class", "sideSubOptions");
    sideSubOptions.setAttribute("id", menu[key]["option"]+"_subSideOption");

    for(let opt in menu[key]["subOption"]){
        let option = document.createElement("li");
        option.innerText = menu[key]["subOption"][opt];
        option.setAttribute("class", "option");
        option.setAttribute("id", menu[key]["option"]+"_"+menu[key]["subOption"][opt]);
        sideSubOptions.appendChild(option);
    }

    if(currOption == menu[key]["option"]){
        sideOptionName.setAttribute("style","color:rgb(252, 103, 49);");
    }
    
    sideBox.appendChild(vr);
    sideBox.appendChild(sideSubOptions);

    sideOptionDetail.appendChild(sideOptionName);
    sideOptionDetail.appendChild(sideOptionBtn);

    sideOption.appendChild(sideOptionDetail);
    sideOption.appendChild(sideBox);
    
    sideMenu.appendChild(sideOption);
}

let sideOption = document.querySelectorAll(".sideOptionDetail");
sideOption.forEach(element => {
    element.addEventListener("click",(event)=>{
        
        let sideOpt = document.getElementById(element.firstChild.innerText+"_subSideOption")
        let sideOptVr = document.getElementById(element.firstChild.innerText+"_subSideOptionVr")
        
        if(sideOpt.getAttribute("style") === "display:none;"){
            sideOpt.setAttribute("style","display:block;");
            sideOptVr.setAttribute("style","display:block;");
            element.lastChild.firstChild.setAttribute("style","rotate:90deg");
        }else{
            sideOpt.setAttribute("style","display:none;");
            sideOptVr.setAttribute("style","display:none;");
            element.lastChild.firstChild.setAttribute("style","rotate:0deg");
        }

        let currOptionName = document.getElementById(currOption);
        currOptionName.setAttribute("style","color:black;");

        localStorage.setItem("currOption",element.firstChild.innerText);
        currOption = localStorage.getItem("currOption");
        element.firstChild.setAttribute("style","color:rgb(252, 103, 49);");
    })
});