/* Implement Rasterization Line Drawing Algorithms (LDAs)*/

/*
    1- Mid-Point LDA
    2- Bresenham LDA
    3- DDA LDA
*/

/* Define 2D Vector */
function Vector2D(x, y) {
    this.x = x;
    this.y = y;
}

//1- Mid-Point LDA
function lda_midPoint(xs, ys, xn, yn)
{
    //Current Position - Starting pos
    let xk=parseInt(xs);
    let yk=parseInt(ys);
    let x_next;
    let y_next;

    //Store pxiel data
    let pixelList=[];

    //Add starting poing
    pixelList.push([xk,yk]);

    dx=parseInt(xn)-parseInt(xs);
    dy=parseInt(yn)-parseInt(ys);

    signDx=Math.sign(dx);
    signDy=Math.sign(dy);

    let m=dy/dx;

    //console.log("dx:"+dx+" - dy:"+dy+" - m:"+m);
    //console.log("signDx:"+signDx+" - signDy:"+signDy);

    // decision parameter d
    //d = (dy - (dx/2));
    d=(m<1)? (Math.abs(dy) -Math.abs(dx/2)) : (Math.abs(dx)-Math.abs(dy/2));

    //if m<o while(xk<xn) else while(yk<yn)
    loop_start=(m<1)?((signDx>0)?xk:xn) : ((signDy>0)?yk:yn) ;
    loop_end=(m<1)?((signDx>0)?xn:xk) : ((signDy>0)?yn:yk);
    //console.log("loop_start:"+loop_start+" - loop_end:"+loop_end);
    for(var i=loop_start;i<loop_end;i++)
    {
        let xk_next;
        let yk_next; 

        console.log("d:"+d);

        // 'E' is chosen
        if (d < 0)
        {
            if(m<1)
            {
                xk_next=xk+(1*signDx);
                yk_next=yk;
                d += Math.abs(dy);
            }else{
                xk_next=xk;
                yk_next=yk+(1*signDy);
                d += Math.abs(dx);
            }
        }        
        else // 'NE' is chosen
        {
            if(m<1)
            {
                xk_next=xk+(1*signDx);
                yk_next = yk+(1*signDy);
                d += (Math.abs(dy) - Math.abs(dx)); 
            }else{
                xk_next=xk+(1*signDx);
                yk_next = yk+(1*signDy);
                d += (Math.abs(dx) - Math.abs(dy)); 
            }
            
        } 
        xk=xk_next;
        yk=yk_next;   
        pixelList.push([xk,yk]);
    }
    return pixelList;
}

//2- Bresenham LDA
function lda_bresenham(xs, ys, xn, yn)
{
    //Current Position - Starting pos
    let xk=parseInt(xs);
    let yk=parseInt(ys);
    let x_next;
    let y_next;

    //Store pxiel data
    let pixelList=[];

    //Add starting poing
    pixelList.push([xk,yk]);

    //Derivatives
    dx=parseInt(xn)-parseInt(xs);
    dy=parseInt(yn)-parseInt(ys);

    //Sign
    signDx=Math.sign(dx);
    signDy=Math.sign(dy);
    console.log("dx:"+dx+", dy:"+dy);

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
                x_next=(xk)+(1*signDx);
                y_next=(yk);
            }
            else if(Pk>=0)
            {
                Pk_next=Pk+2*Math.abs(dy)-2*Math.abs(dx);
                x_next=( (xk)+(1*signDx) );
                y_next=( (yk)+(1*signDy) );
            }
            Pk=Pk_next;
            xk=x_next;
            yk=y_next;

            pixelList.push([xk,yk]);


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
                y_next=(yk)+(1*signDy);
            }
            else if(Pk>=0)
            {
                Pk_next=Pk+2*Math.abs(dx)-2*Math.abs(dy);
                x_next=( (xk)+(1*signDx) );
                y_next=( (yk)+(1*signDy) );
            }
            Pk=Pk_next;
            xk=x_next;
            yk=y_next;

            pixelList.push([xk,yk]);


            //console.log("x:"+xk+",y:"+yk+"\n");
        } //Process until dx-1

    }

    //console.log(pixelList_x);
    //console.log(pixelList_y);

    return pixelList;
}

//3- DDA LDA
function lda_dda(xs, ys, xn, yn)
{
    let xk=parseInt(xs);
    let yk=parseInt(ys);

    let dx=xn-xs;
    let dy=yn-ys;

    let m=dy/dx;

    var step=(Math.abs(dx) > Math.abs(dy))?step=Math.abs(dx):step=Math.abs(dy);

    //  Step incerement
    dx = dx / step;
    dy = dy / step;

    //Store pxiel data
    let pixelList=[]; //x,y

    //Add starting poing
    pixelList.push([xk,yk]);

    for (var i = 1; i <= step; i++)
    {
        let xk_next;
        let yk_next;

        //Increment
        xk_next = (xk + dx);
        yk_next = (yk + dy);

        xk=xk_next;
        yk=yk_next;
        pixelList.push([Math.round(xk),Math.round(yk)]);
    }
    return pixelList;
}

//Select & Run Line Drawing Algorithm
var pixelList;
function lda_run()
{
    var ldaSelectionId = document.getElementById("ldaList").value;

    var x0 = document.getElementById("x0").value;
    var y0 = document.getElementById("y0").value;
    var xn = document.getElementById("xn").value;
    var yn = document.getElementById("yn").value;

    var pixelSize = document.getElementById("pixelSize").value;

    if(ldaSelectionId==1)
    {
        console.log("Bresenham LDA run");
        pixelList=lda_bresenham(x0, y0, xn, yn);
        console.log(pixelList);

        //Draw Filled Pixels
        for(var i=0;i<pixelList.length;i++)
            drawSquareWbackgroundColor(pixelList[i][0]*pixelSize,pixelList[i][1]*pixelSize,pixelSize);

        //Redraw Line to be able to seen top of filled pixels
        drawLine();
        

    }
    else if(ldaSelectionId==2)
    {
        console.log("DDA LDA run");
        pixelList=lda_dda(x0, y0, xn, yn);
        console.log(pixelList);

        //Draw Filled Pixels
        for(var i=0;i<pixelList.length;i++)
            drawSquareWbackgroundColor(pixelList[i][0]*pixelSize,pixelList[i][1]*pixelSize,pixelSize);

        //Redraw Line to be able to seen top of filled pixels
        drawLine();
    }
    else if(ldaSelectionId==3)
    {
        console.log("Mid-point LDA run");
        pixelList=lda_midPoint(x0, y0, xn, yn);
        console.log(pixelList);

        //Draw Filled Pixels
        for(var i=0;i<pixelList.length;i++)
            drawSquareWbackgroundColor(pixelList[i][0]*pixelSize,pixelList[i][1]*pixelSize,pixelSize);

        //Redraw Line to be able to seen top of filled pixels
        drawLine();
    }
    else{
        console.log("Selected Algorithm is yet to be implemented.");
        alert("Selected Algorithm is yet to be implemented.");
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
    ctx.moveTo( (x0)*pixelSize+pixelSize/2, (y0)*pixelSize+pixelSize/2 );     // Move the pen to (x0, y0)
    ctx.lineTo( (xn)*pixelSize+pixelSize/2, (yn)*pixelSize +pixelSize/2);     // Draw a line to (xn, yn)
    ctx.stroke();           // Render the path

}