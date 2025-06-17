// code 1
const t1 = performance.now();
for(let i=1; i<=10; i++){
    let para = document.createElement('p');
    para.textContent = "This is the para" + i +"a";
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Time taken by the code1 = " + (t2-t1));

// code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=1; i<=10; i++) {
    let para = document.createElement("h6");
    para.textContent = "Wait I'm Creating" + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log(" code2 =" + (t4-t3));


// best practice
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=0; i<=10; i++){
    let para = document.createElement('h3');
    para.textContent = 'best practice with need to follow'+ i ;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("Time taken code3 =" + (t6-t5));