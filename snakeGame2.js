//fruit detail
var fruitX=20;
var fruitY=20;
//snake detail
var interval=100;
var snakeX=10;
var snakeY=10;
var snakeLenght=0;
var snakeBodyPart={x:null,y:null};
var snakeBody=[];
var direction='down';
var endTail=snakeBodyPart;

function setHead(x,y){
    this.snakeX=x;
    this.snakeY=y;
}

function getHead(){
    return [this.snakeX,this.snakeY];
}


function snakeBodyMaker(){
    
    var len=snakeBody.length;
    var lastIndex=snakeBody[len-1];
    endTail=lastIndex;
    //console.log(snakeBody);
    //console.log(len);
    document.getElementById(lastIndex[0]+'-'+lastIndex[1]).className = "blank";
    //console.log('this the one'+[snakeX,snakeY]);
    document.getElementById(snakeX+'-'+snakeY).className = "snake";
    //document.getElementById(lastIndex[0]+'-'+lastIndex[1]).className = "blank";
    snakeBody.pop();
}

function fruitMaker(){
    this.fruitX=Math.floor(Math.random()*(28))+1;
    this.fruitY=Math.floor(Math.random()*(28))+1;
    console.log([fruitX,fruitY]);
    return [fruitX,fruitY];
}

function fruitFinder(){
    if(snakeX==fruitX&& snakeY==fruitY){
        snakeBody.push(endTail);
        fruitMaker();
        document.getElementById(fruitX+'-'+fruitY).className='fruit';
    }else{
        document.getElementById(fruitX+'-'+fruitY).className='fruit';
    }
}



// determine which direction the snake is moving
//_______________________________________________________________
function headTowardTheDirection(){
        if(direction==='up'){
            snakeX=snakeX-1;
            setHead(snakeX,snakeY);
            //document.getElementById(snakeY+'-'+snakeX).className = "snake";
        }else if(direction==='down'){
            snakeX=snakeX+1;
            setHead(snakeX,snakeY);
        }else if(direction==='right'){
            snakeY=snakeY+1;
            setHead(snakeX,snakeY);
        }else if(direction==='left'){
            snakeY=snakeY-1;
            setHead(snakeX,snakeY);
        }
        snakeBody.unshift(getHead());
}
//_________________________________________________________________
//_________________________________________________________
//
function setDirection(event){
    if(event.key=='w'){
        if(!(direction=='up'||direction=='down')){
            this.direction='up';
           }
    }
    if(event.key=='s'){
        if(!(direction=='up'||direction=='down')){
            this.direction='down';
           }
    }
    if(event.key=='a'){
        if(!(direction=='left'||direction=='right')){
            this.direction='left';
           }
    }
    if(event.key=='d'){
        if(!(direction=='right'||direction=='left')){
            this.direction='right';
           }
    }
    //console.log(this.direction);
}

function gameOver(){
    var gameState=false;
    if(snakeX>height-2 || snakeY>height-2||snakeX<1 || snakeY < 1){
        gameState= true;
    }else{
        for(var x=1;x<snakeBody.length;x++){
            console.log(snakeBody[0]);
            if(snakeBody[0][0]===snakeBody[x][0]&&snakeBody[0][1]===snakeBody[x][1]){
                gameState= true;
            }
        }   
    }
    return gameState;
}



//document.addEventListener('keypress',function(){
//    setDirection(event);
//    console.log(event.key);
//});



function newPosition(){
    var inte=setInterval(function(){
        var gameStatus=gameOver();
        if(!gameOver()){
            headTowardTheDirection();
            snakeBodyMaker();
            fruitFinder();    
        }else{
            document.write('<h1>Game Oveeeeeeeeeeeeeeeeeeer</h1>');
            //break;
            clearInterval(inte);
        }
    },interval);
}


function init(){
    createMap();
    snakeBody.push(getHead());
    document.addEventListener('keypress',function(){
    setDirection(event);    
    //console.log(event.key);
    });
    
    newPosition();
}

function runGame(){
    document.addEventListener('keypress',function(){
    if(event.key=='e'){
        snakeBody.push(endTail);
    }
    //console.log(event.key);
    });
    init();
}

runGame();
