let xpos = 150;
let ypos = 200;

let rectWidth = 300;
let rectHeight = 200;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(200,20,20);
    rect(xpos, ypos, rectWidth, rectHeight);

    if((mouseX > xpos) && (mouseX < (xpos+rectWidth)) && (mouseY > ypos) && (mouseY < (ypos+rectHeight)))
    {
        fill(0,255,0);
    }
    else
    {
        fill(255);
    }

    // rect(mouseX,mouseY,50,50);
    // print(mouseX,mouseY);

    // logical operators
    // if(mouseX>width/2)
    // {
    //     if(mouseY > height/2)
    //     {  
    //         fill('blue');
    //     }
    //     else
    //     {
    //         fill('yellow')
    //     }
    // }
    // else
    // {
    //     if(mouseY>height/2)
    //     {
    //         fill('white');
    //     }
    //     else
    //     {
    //         fill('green');
    //     }
    // }
}
