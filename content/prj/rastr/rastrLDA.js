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

}

//3- DDA LDA
function lda_dda(xs, ys, xn, yn)
{

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
    var i=0,j=0;
    for(i=0;i<yNum;i++)
    {
        for(j=0;j<xNum;j++)
        {
            //console.log("i:"+i+",j:"+j+"\n");
            drawSquare(j*pixelSize,i*pixelSize,pixelSize);
            //context.strokeRect(j*pixelSize,i*pixelSize,pixelSize,pixelSize);
        }
    }
}