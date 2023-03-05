let article = document.querySelector("article");
let placeholder = "";
let template = 
`
<div class="image-container">
                <div class="image-box">
                    <img src="./img/1.jpg" width=300px alt="">
                <input placeholder="Enter caption here" type="text">
                </div>
                <div class="image-box">
                    <img src="./img/2.jpg" width=300px alt="">
                    <input placeholder="Enter caption here" type="text">
                </div>
                <div class="image-box">
                    <img src="./img/3.jpg" width=300px alt="">
                    <input placeholder="Enter caption here" type="text">
                </div>
            </div>
`
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
    let imageContainers = `<div class="image-container">`
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            imageContainers += 
            `
            <div class="image-box">
                    <img src="./img/${appeared[index]}.jpg" width=300px alt="">
                    <input placeholder="Enter caption here" type="text">
            </div>
            `
            index++;
        }
        imageContainers += 
        `
        </div>
        <div class="image-container">
        `;
    }
    article.innerHTML = imageContainers;
    console.log(imageContainers);
}
randArr();
loop();