//snake detail
function head(){
    return [this.snakeX,this.snakeY];
}
var tailSize=0;
var tailSpec=[14,15];
var tailSpecs=[tailSpec];
function tailFollowHead(){
    tailSpecs=head();
}


// environment
var height=50;
var width=50;

//snake location
var snakeX=15;
var snakeY=15;

//snake direction
var direction='left';

// this function set the direction of the snake
function setDirection(){
    if(event.key=='w'){
        this.direction='up';
    }
    if(event.key=='s'){
        this.direction='down';
    }
    if(event.key=='a'){
        this.direction='left';
    }
    if(event.key=='d'){
        this.direction='right';
    }
    console.log(this.direction);
}



// this function create the map for the snake game by table
function createMap(){
    document.write("<table>");
    for(var x=0;x<width;x++){
        document.write("<tr>");
        for(var y=0;y<height;y++){
            if(x==0 || x==width-1 || y==0 || y==height-1){
                document.write("<td class='wall' id='"+x+"-"+y+"'>");
            }else{
                document.write("<td class='blank' id='"+x+"-"+y+"'>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

// this function reset the game
//__________________________________________________________________________
function gameReset(){
    
}
//this function move the snake to the different directions
//_________________________________________________________________________
//function setDirection(){
//    document.addEventListener('keypress',function(){
//        direction(event);
//    });
//}
//move the snake one step forward
//_________________________________________________________________________
function move(){
    if(direction==='up'){
        snakeY=snakeY-1;
        document.getElementById(snakeY+'-'+snakeX).className = "snake";
    }else if(direction==='down'){
        snakeY=snakeY+1;
        document.getElementById(snakeY+'-'+snakeX).className = "snake";
    }else if(direction==='right'){
        snakeX=snakeX+1;
        document.getElementById(snakeY+'-'+snakeX).className = "snake";
    }else if(direction==='left'){
        snakeX=snakeX-1;
        document.getElementById(snakeY+'-'+snakeX).className = "snake";
    }
}

// this function move the snake base on the determined intervals
//_________________________________________________________________________
function newPosition(){
    setInterval(function(){
        move();
        console.log(head());
    },300);
}

function init(){
    createMap();
    newPosition();
}

init();
document.addEventListener('keypress',function(){
    setDirection(event);
    console.log(event.key);
});
