let article = document.querySelector("form");
let placeholder = "";

function randGen(){
    return Math.floor(Math.random()*19)
}
let appeared = []
function randArr(){
    for(let i=1;i<20;i++){
        if(appeared.length === 9){
            break;
        }
        else{     
            let rand = randGen();
            while(appeared.includes(rand)){
                rand = randGen();
            }
            appeared.push(rand);
        }
    }
}
const reset = () =>{
    appeared = [];
    index = 0;
    imageContainers = ""
    randArr();
    loop();
}
let index = 0;
function loop(){
    let imageContainers = `
    <div class="image-container">
    <div class="image-box">
        <img src="./img/${appeared[index]}.jpg" alt="">
        <input class="form-entry" placeholder="Enter caption here" name="Caption" type="text">
        <input class="image-ID" value=${appeared[index]} name="Image_ID" type="text">
        <input id="submit" type="submit" value="Submit" name="submit">
    </div>
    <div class="image-container">
    `

    // for(let i=0;i<3;i++){
    //     for(let j=0;j<3;j++){
    //         imageContainers += 
    //         `
    //         <div class="image-box">
    //                 <img src="./img/${appeared[index]}.jpg" width=300px alt="">
    //                 <input class="form-entry" placeholder="Enter caption here" name="Caption" type="text">
    //                 <input id="submit" type="submit" value="Submit" name="submit">
    //         </div>
    //         `
    //         index++;
    //     }
    //     imageContainers += 
    //     `
    //     </div>
    //     <div class="image-container">
    //     `;
    // }
    article.innerHTML = imageContainers;
}
randArr();
loop();

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSeo_FoaNNI6V4NZIv_q2bJrapVidAWppPnrEzxwrkVtn785TU_rzrrOmakqn8C3F_/exec'
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => delay())
        .catch(error => console.error('Error!', error.message))   
})
let submitBtn = document.getElementById("submit");
document.addEventListener('keydown',e =>{
    if(e.code === 'Enter'){
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => delay())
        .catch(error => console.error('Error!', error.message))  
    }
})
function delay(){
    console.log("Submission Done");
    reset();
}