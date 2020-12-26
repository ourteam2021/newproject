const colorarr = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","F"]
let colbtn = document.getElementById("colbtn");
let coltext = document.getElementById("coltext");

function getrandomnumber(){
    return Math.ceil(Math.random() * 14)
}

colbtn.addEventListener("click" , ()=>{

    hasala = ``
    for (i=0 ; i<6 ; i++){
        hasala += colorarr[getrandomnumber()]
    }
    document.body.style.backgroundColor = `#${hasala}`
    coltext.innerHTML = ` #${hasala}`
    onthercol()
})
let firstcolor = document.getElementById("firstcolor"),
    seccolor = document.getElementById("seccolor"),
    thirdcolor = document.getElementById("thirdcolor"),
    fourcolor = document.getElementById("fourcolor"),
    fivecolor = document.getElementById("fivecolor"),
    firsttext = document.getElementById("firsttext"),
    sectext = document.getElementById("sectext"),
    thirdtext = document.getElementById("thirdtext"),
    fourtext = document.getElementById("fourtext"),
    fivetext = document.getElementById("fivetext")

    
async function onthercol() {
    let x = await fetch("https://www.thecolorapi.com/scheme?hex="+hasala)  
    let z = await x.json()
    let color = z.colors
    
    firstcolor.style.backgroundColor = color[0].hex.value
    seccolor.style.backgroundColor = color[1].hex.value
    thirdcolor.style.backgroundColor = color[2].hex.value
    fourcolor.style.backgroundColor = color[3].hex.value
    fivecolor.style.backgroundColor = color[4].hex.value
    firsttext.innerHTML = color[0].hex.value
    sectext.innerHTML = color[1].hex.value
    thirdtext.innerHTML = color[2].hex.value
    fourtext.innerHTML = color[3].hex.value
    fivetext.innerHTML = color[4].hex.value
}



