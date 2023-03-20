let article = document.querySelector("form");
let placeholder = "";

function randGen(){
    return Math.floor(Math.random()*997)
}
let appeared = []
function randArr(){
    for(let i=1;i<998;i++){
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
console.log(appeared);
const reset = () =>{
    appeared = [];
    index = 0;
    imageContainers = ""
    randArr();
    loop();
}
// let index = 0;
function loop(){
    let imageContainers = `
    <div class="image-container">
        <div class="image-row">
            <div class="image-box">
                <img src="./img/${appeared[0]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_1" type="text" required>
                <input class="image-ID" value=${appeared[0]} name="Image_ID_1" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[1]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_2" type="text" required>
                <input class="image-ID" value=${appeared[1]} name="Image_ID_2" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[2]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_3" type="text" required>
                <input class="image-ID" value=${appeared[2]} name="Image_ID_3" type="text">
            </div>
        </div>
        <div class="image-row">
            <div class="image-box">
                <img src="./img/${appeared[3]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_4" type="text" required>
                <input class="image-ID" value=${appeared[3]} name="Image_ID_4" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[4]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_5" type="text" required>
                <input class="image-ID" value=${appeared[4]} name="Image_ID_5" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[5]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_6" type="text" required>
                <input class="image-ID" value=${appeared[5]} name="Image_ID_6" type="text">
            </div>
        </div>
        <div class="image-row">
            <div class="image-box">
                <img src="./img/${appeared[6]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_7" type="text" required>
                <input class="image-ID" value=${appeared[6]} name="Image_ID_7" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[7]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_8" type="text" required>
                <input class="image-ID" value=${appeared[7]} name="Image_ID_8" type="text">
            </div>
            <div class="image-box">
                <img src="./img/${appeared[8]}.jpeg" width="300px" height="300px" alt="">
                <input class="form-entry" placeholder="Enter caption here" name="Caption_9" type="text" required>
                <input class="image-ID" value=${appeared[8]} name="Image_ID_9" type="text">
            </div>
        </div>
        <input id="submit" type="submit" value="Submit" name="submit">
    <div class="image-container">
    `

    // for(let i=0;i<3;i++){
    //     for(let j=0;j<3;j++){
    //         imageContainers += 
    //         `
    //         <div class="image-box">
    //                 <img src="./img/${appeared[index]}.jpeg" width=300px alt="">
    //                 <input class="form-entry" placeholder="Enter caption here" name="Caption" type="text" required>
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

//google sheet link
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