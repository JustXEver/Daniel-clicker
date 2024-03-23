document.getElementById("button1").addEventListener("click",function(){
    for (let i =0; i<10; i++){
        createFairy();
        console.log("I am the boss");
    }
});

function createFairy(){
    const fairy =document.createElement("div");
    fairy.className="snowflakes";

    const posX = Math.random()*window.innerWidth;
    const posY = -10; 

    const speedX = (Math.random()-0.2)*5;
    const speedY= Math.random()* 5+1; 

    document.querySelector(".container").appendChild(fairy);

    moveFairy(fairy,posX,posY,speedX,speedY);

}

function moveFairy(fairy,posX,posY,speedX,speedY){

    fairy.style.left=posX+"px";
    fairy.style.top=posY+"px";

    fairy.style.diplay="block"

    function move(){
        posX+=speedX;
        posY+=speedY;

        fairy.style.left=posX+"px";
        fairy.style.top=posY+"px";

        if(posY< -110){
            fairy.remove();
        }else{
            requestAnimationFrame(move);
        }



    }
    move();
}