let button = document.querySelector("button");
url = "https://dog.ceo/api/breeds/image/random";

async function randomImg(){
    try {
        let res = await fetch(url);
        let result = await res.json();
        return result.message;
    }
    catch(err){
        console.log("Error - ",err)
        return "No image found"
    }  
}

button.addEventListener("click",async ()=>{
    let img = document.querySelector("img");
    img.src = await randomImg();
})
