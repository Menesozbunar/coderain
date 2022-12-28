const matrix=document.querySelector(".matrix");
function makeID(){
    let result="";
    let characters="ZXCVBNMOÇASDFGHJKLSIQWERTYUIOPĞU,<.zxcvbnmoçasdfghjklşiqwertyuiopğü1234567890*?\!'^#+$%&"
    result += characters.charAt(Math.floor(Math.random()*characters.length));
    return result;
}
function generateText(){
    const w=10;
    const h=30;
    for(let i =0;i<w;i++){
        const timeout=Math.floor(Math.random()*10)*100;
        let delay=0;

        const column=document.createElement("p");
         for(let j=0;j<h;j++){
            const letter=document.createElement("span");
            letter.innerHTML=makeID();
            column.appendChild(letter)
            delay+=100;
            column.children[j].style.animationDelay=delay+"ms";

         }
         setTimeout(()=>{
            matrix.appendChild(column);
         },timeout)
    }
}
generateText();