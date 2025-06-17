async function getData() {
    setTimeout(function(){
        console.log("I am inside async code block");
    },3000);
}
let output = getData();
async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}
getData();
async function getData2(){
    let response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data2 = await response2.json();
    console.log(data2);
}
getData2();
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    method: 'POST',
    body: JSON.stringify({username: "Dhani"}),
    headers: myHeaders,
};
async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response:", data);
}
getData();
    

async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("post data response:",data);
}
async function processData() {
    await postData();
    await getData();

}
processData();
    


    


