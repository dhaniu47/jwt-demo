// let name = "rishi";
// function outer() {
//     // let name = "Disha";
//     function inner() {
//         // let name = "sharma";
//         console.log(name);

//     }
//     inner();
// }
// outer();
function outerFunction() {
    let she = "Swaraj rani";
    function innerFunction() {
        console.log(she);
    }
    return innerFunction;
}
let inner = outerFunction();
inner();