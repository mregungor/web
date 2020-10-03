/* Implement Rasterization Line Drawing Algorithms (LDAs)*/

/*
    1- Mid-Point LDA
    2- Bresenham LDA
    3- DDA LDA
*/

/* Define 2D Vector */


//1- Mid-Point LDA
function lda_midPoint(xs, ys, xn, yn)
{

}

//2- Bresenham LDA
function lda_bresenham(xs, ys, xn, yn)
{
    var pixelSize = document.getElementById("pixelSize").value;

    //Current Position - Starting pos
    let xk=parseInt(xs);
    let yk=parseInt(ys);
    let x_next;
    let y_next;

    //Store pxiel data
    let pixelList_x=[];
    let pixelList_y=[];

    //Add starting poing
    pixelList_x.push(xk);
    pixelList_y.push(yk);

    //Fill First Pixel
    drawSquareWbackgroundColor(xs*pixelSize,ys*pixelSize,pixelSize);

    //Derivatives
    dx=parseInt(xn)-parseInt(xs);
    dy=parseInt(yn)-parseInt(ys);


    if(Math.abs(dx) > Math.abs(dy))
    {
        //Decision parameter Pk
        Pk= (2*Math.abs(dy))-Math.abs(dx); 

        //console.log("dx:"+dx+", dy:"+dy+", Pk:"+Pk);

        let i=1;//Pixels start with 1 
        for(i=1; i<=Math.abs(dx);i++)
        {
            /* Current Position (xk,yk) */
            if(Pk<0)
            {
                Pk_next=Pk+2*Math.abs(dy);
                x_next=(xk)+1;
                y_next=(yk);
            }
            else if(Pk>=0)
            {
                Pk_next=Pk+2*Math.abs(dy)-2*Math.abs(dx);
                x_next=( (xk)+1 );
                y_next=( (yk)+1 );
            }
            Pk=Pk_next;
            xk=x_next;
            yk=y_next;

            //Fill Current Determined Pixel
            drawSquareWbackgroundColor(xk*pixelSize,yk*pixelSize,pixelSize);

            pixelList_x.push(xk);
            pixelList_y.push(yk);

            //console.log("x:"+xk+",y:"+yk+"\n");
        } //Process until dx-1
    }
    else{
        //Decision parameter Pk
        Pk= (2*Math.abs(dx))-Math.abs(dy); 

        //console.log("dx:"+dx+", dy:"+dy+", Pk:"+Pk);

        let i=1;//Pixels start with 1 
        for(i=1; i<=Math.abs(dy);i++)
        {
            /* Current Position (xk,yk) */
            if(Pk<0)
            {
                Pk_next=Pk+2*Math.abs(dx);
                x_next=(xk);
                y_next=(yk)+1;
            }
            else if(Pk>=0)
            {
                Pk_next=Pk+2*Math.abs(dx)-2*Math.abs(dy);
                x_next=( (xk)+1 );
                y_next=( (yk)+1 );
            }
            Pk=Pk_next;
            xk=x_next;
            yk=y_next;

            //Fill Current Determined Pixel
            drawSquareWbackgroundColor(xk*pixelSize,yk*pixelSize,pixelSize);

            pixelList_x.push(xk);
            pixelList_y.push(yk);

            //console.log("x:"+xk+",y:"+yk+"\n");
        } //Process until dx-1

    }

    console.log(pixelList_x);
    console.log(pixelList_y);

    //Draw Line again to see Line
    drawLine();
}

//3- DDA LDA
function lda_dda(xs, ys, xn, yn)
{

}

//Select & Run Line Drawing Algorithm
function lda_run()
{
    var ldaSelectionId = document.getElementById("ldaList").value;

    var x0 = document.getElementById("x0").value;
    var y0 = document.getElementById("y0").value;
    var xn = document.getElementById("xn").value;
    var yn = document.getElementById("yn").value;


    if(ldaSelectionId==1)
    {
        lda_bresenham(x0, y0, xn, yn);
        console.log("Bresenham LDA run");
    }else{
        console.log("Selected Algorithm is yet to be implemented.");
    }

}

function drawSquare(x,y,size)
{
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        //context.fillRect(20,20,100,100);
        //context.clearRect(40,40,60,60);
        //context.strokeRect(45,45,50,50);
        context.strokeRect(x,y,size,size);
    }
}

function drawSquareWbackgroundColor(x,y,size)
{
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        //context.fillStyle = "lightyellow"; 
        context.fillStyle = "yellow";
        context.fillRect(x, y, size, size); 
        context.strokeRect(x,y,size,size);
        //contex.stroke(); 
    }
}

function draw()
{
    //Clear canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawSquare(45,45,50);
}

function drawSquareFromInput()
{
    //Clear canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    var rect_x = document.getElementById("rect_x").value;
    var rect_y = document.getElementById("rect_y").value;
    var rect_size = document.getElementById("rect_size").value;
    alert("Test-\n rect_x:"+rect_x+"  rect_y:"+rect_y+"  rect_size:"+rect_size);
    drawSquare(rect_x,rect_y,rect_size);
}

/*drawPixelArea(pixelSize,rowNum,columnNum)*/
function drawPixelArea()
{
    var pixelSize = document.getElementById("pixelSize").value;
    var xNum = document.getElementById("xNumber").value;
    var yNum = document.getElementById("yNumber").value;


    var canvas = document.getElementById('canvas');
    canvas.width = (xNum)*pixelSize+10;
    canvas.height = (yNum)*pixelSize+10;

    //Clear canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    /* Draw RxC Pixels based on pixel size  */
    //alert("width:"+canvas.width+"- height:"+canvas.height+"\n"+"yNum:"+yNum+" - xNum:"+xNum);
    var i=1,j=1; //Pixels start with (1,1)
    for(i=1;i<yNum;i++)
    {
        for(j=1;j<xNum;j++)
        {
            //console.log("i:"+i+",j:"+j+"\n");
            drawSquare(j*pixelSize,i*pixelSize,pixelSize);
            //context.strokeRect(j*pixelSize,i*pixelSize,pixelSize,pixelSize);
        }
    }
}



function drawLine()
{
    var pixelSize = document.getElementById("pixelSize").value;
    var x0 = parseInt(document.getElementById("x0").value);
    var y0 = parseInt(document.getElementById("y0").value);
    var xn = parseInt(document.getElementById("xn").value);
    var yn = parseInt(document.getElementById("yn").value);


    const ctx = canvas.getContext('2d');


    ctx.beginPath();        // Start a new path
    ctx.moveTo( (x0)*pixelSize, (y0)*pixelSize );     // Move the pen to (x0, y0)
    ctx.lineTo( (xn+1)*pixelSize, (yn+1)*pixelSize );     // Draw a line to (xn, yn)
    ctx.stroke();           // Render the path

}