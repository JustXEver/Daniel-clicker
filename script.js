var score=0;
var clickingPower=1;

var cursorCost = 15;
var cursors=0;

function buycursor(){
    if(score>= cursorCost ){
        let wholescreen =document.querySelector('#image1')
        wholescreen.style.border='none '

        score=score - cursorCost;
        cursors=cursors+1;
        cursorCost=Math.round(cursorCost*1.15);

        document.getElementById("score").innerHTML=score;
        document.getElementById("cursorcost").innerHTML=cursorCost;
        document.getElementById("cursors").innerHTML=cursors;
        updateScorePerSecond();

    } 
    if(cursors>=10){
        
    }
}

var flashbangswitch=true;

//flashbang
setInterval(()=>{
    if(score==15 && flashbangswitch){
        flashbangswitch=false;
        let wholescreen =document.querySelector('#image1')
        wholescreen.style.border=' 3px solid red '

}})






// Mad scientist



var scientistCost = 100;
var scientists=0;
var scientistmultiplier=1;
var scientistupdaterate=1;

//multiplier
var scientistswitch = true;

function syringe(){
    if(score>= 200  && scientistswitch){
    score=score - 200;
    scientistmultiplier=scientistmultiplier*2;
    scientistupdaterate=scientists*scientistmultiplier;
    updateScorePerSecond();
    let opacitychange= document.querySelector('.popup2 img');
    opacitychange.style.opacity='50%'
    }
}

//buyscientist


function buyscientist(){
    if(score>= scientistCost){
        score=score - scientistCost;
        scientists=scientists+1;
        scientistCost=Math.round(scientistCost*1.15);

        document.getElementById("score").innerHTML=score;
        document.getElementById("scientistcost").innerHTML=scientistCost;
        document.getElementById("scientists").innerHTML=scientists;
        updateScorePerSecond();
    } 
}


//daniel parents

var parentCost = 1100;
var parents=0;

function buyparent(){
    if(score>= parentCost){
        score=score - parentCost;
        parents=parents+1;
        parentCost=Math.round(parentCost*1.15);

        document.getElementById("score").innerHTML=score;
        document.getElementById("parentcost").innerHTML=parentCost;
        document.getElementById("parents").innerHTML=parents;
        updateScorePerSecond();
    } 
}


//buildings


var display={
    updateScore: function() {
        document.getElementById("score").innerHTML=game.score;
        document.getElementById("scorePerSecond").innerHTML=game.getScorePerSecond();
        document.title=game.score + "Daniel - Daniel Clicker";
    }
};

// updateShop: function(){
//     document.getElementById("shopContainer").innerHTML="";
//     for (i=0,i<building.name.length;i++){
//         document.getElementById("shopContainer").innerHTML+=''
//     }
// };





//upgrades






//upgrades descriptions

function popup(){
    document.querySelector('p').classList.toggle('show');
}

function popup2(){
    // document.classList('popuptext2').classList.toggle('show');
    document.querySelector('.popuptext2').classList.toggle('show2');
}


// function popupadd(){
//     var popup = document.getElementById("myPopup");
//     popup.classList.add("show");
//   }

//things

document.getElementById("clicker").addEventListener("click",function(){
    game.totalClicks++;
    game.addToScore(game.clickValue);
},false);



//cursor upgrade
var cursorswitch=true;
function stonecursor(){
    if(score>= 100 && cursorswitch){
        score=score - 100

        clickingPower=clickingPower*2


        cursorswitchswitch=false;
        let opacitychange= document.querySelector('.popup img');
        opacitychange.style.opacity='50%'

    }
    
}
// Score update




function addToScore(amount){
    score=score+amount;
    document.getElementById("score").innerHTML=score;
}

function updateScorePerSecond(){
    ScorePerSecond = cursors+(scientists*5*scientistupdaterate)+parents*8;
    document.getElementById("scorepersecond").innerHTML= ScorePerSecond;
}

setInterval(() => {
    score = score + cursors;
    score = score + scientists *5*scientistupdaterate;
    score = score + parents *8;

    document.getElementById("score").innerHTML=score ;

    document.title=score+"Daniel - Daniel Clicker";
}, 1000);




//snowflakes

document.getElementById("clicker").addEventListener("click",function(){
    for (let i =0; i<1 ; i++){
        createFairy();
        console.log("I am the boss");
    }
});

function createFairy(){
    const fairy =document.createElement("div");
    fairy.className="snowflakes";

    const posX = Math.random()*window.innerWidth;
    const posY = -10; 

    const speedX = (Math.random()-0.2)*3;
    const speedY= Math.random()* 3+1; 

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



//+1 animation



function addOne() {


  var moneyAnimation = document.createElement("p");
  moneyAnimation.innerHTML = "+1";
  document.getElementById("moneyAnimation").appendChild(moneyAnimation);
  moneyAnimation.classList.add("moneyAnimation"); // Add the class that animates
}


