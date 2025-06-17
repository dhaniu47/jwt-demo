// let fpara = document.getElementById("fpara");
// fpara.textContent = "Dhruv are you there?";
function changeText(event) {
    console.log(event);
    let fpara = document.getElementById("fpara");
    fpara.textContent = " are you there?";

}
let fpara = document.getElementById("fpara");
fpara.addEventListener("click", changeText); 
// fpara.removeEventListener("click",changeText);
let anchorElement = document.getElementById("fanchor");
anchorElement.addEventListener("click", function(events){
    events.preventDefault();
    anchorElement.textContent = "link is disabled";
})
let paras = document.querySelectorAll("p");
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click",function(){
//         alert("you have clicked on para:" + (i+1));
//     })

// }
function alertPara(eventx){
    if(eventx.target.nodeName === 'SPAN'){
        alert("u hv clicked on me-" + eventx.target.textContent);

    }

    
}
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     console.log("event listener added");
//     para.addEventListener("click",alertPara);
// }
let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara);

