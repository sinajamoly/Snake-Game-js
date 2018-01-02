// environment
var height=30;
var width=30;


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

function createMapLost(){
    document.write("<table>");
    for(var x=0;x<width;x++){
        document.write("<tr>");
        for(var y=0;y<height;y++){
            if(x==0 || x==width-1 || y==0 || y==height-1){
                document.getElementById(x+'-'+y).className='gameOver';
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}


