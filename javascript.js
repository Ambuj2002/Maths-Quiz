var playing=false;
var score;
var timeremaining;
var action;
var correctans;
// start/reset button
    document.getElementById("start").onclick = function(){
        
        // playing or not
            // yes-->reload
        if(playing==true){
            location.reload();
        }
            // no-->
        else{
            // set score to zero
            playing=true;
            score=0;
            document.getElementById("gameover").style.display="none";
            document.getElementById("scorevalue").innerHTML=score;
            // show timer
            document.getElementById("timer").style.display="block";
            // change start button to reset button
            timeremaining=60;

            document.getElementById("start").innerHTML="Reset Game";
            // start timer in loop
            starttimer();
            // show new question and options
            generateQA();

            
            
        }
    }    
    document.getElementById("box1").onclick = function(){
        if(playing==true){
            if(document.getElementById("box1").innerHTML==correctans){
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000)
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                generateQA();
            }
            else{
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000)

            }
        }
    }
    document.getElementById("box2").onclick = function(){
        if(playing==true){
            if(document.getElementById("box2").innerHTML==correctans){
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000)
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                generateQA();
            }
            else{
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000)

            }
        }
    }
    document.getElementById("box3").onclick = function(){
        if(playing==true){
            if(document.getElementById("box3").innerHTML==correctans){
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000)
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                generateQA();
            }
            else{
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000)

            }
        }
    }
    document.getElementById("box4").onclick = function(){
        if(playing==true){
            if(document.getElementById("box4").innerHTML==correctans){
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000)
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                generateQA();
            }
            else{
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000)

            }
        }
    }
                
                  
            

// click on answer box
    // if we are playing
        // incorrect-->show try again box for 1s
        // correct
            // show correct box
            // increase the score by 1
            // new q&a
    // if we are not playing
        // no response

function starttimer(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            stopCountDown();
            document.getElementById("gameover").style.display="block";
            document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>Your Score is " + score + ".</p>";
            document.getElementById("timer").style.display="none";
            document.getElementById("correct").style.display="none";
            document.getElementById("wrong").style.display="none";

            playing=false;
            document.getElementById("start").innerHTML="Start Game";
        }
    },1000)
    
}
function stopCountDown(){
    clearInterval(action);
}
function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctans = x*y;
    document.getElementById("question").innerHTML=x+" X "+y;
    var correctposition = 1+Math.round(3*Math.random());
    var answers=[correctans];
    document.getElementById("box"+correctposition).innerHTML=correctans;
    for(i=1;i<5;i++){
        if(i!=correctposition){
            
            var a=1+Math.round(9*Math.random());
            var b=1+Math.round(9*Math.random());
            var k = a*b;
            while(answers.indexOf(k)>-1){
                var a=1+Math.round(9*Math.random());
                var b=1+Math.round(9*Math.random());
                var k = a*b;
            }
            document.getElementById("box"+i).innerHTML=k;
            answers.push(k);
        }
    }
}