function script()
{
    var canvas = document.getElementById("canvas");
    var mydiv = document.getElementById("customDiv")
    var myX = 0;
    var myY = 0;
    var currentAngle = 0;
    var sliceingX = canvas.offsetLeft+(canvas.offsetWidth/2);
    var sliceingY = canvas.offsetTop+(canvas.offsetHeight/2);
    

    var myScroll = (value) => {
        if(value==1)
        {
            var myoptions = document.getElementById("options");
            var c = myoptions.children;
            for(var i=0; i<myoptions.children.length; i++)
            {
                c[i].addEventListener("active", ()=>{
                    console.log("CLicked");
                })
            }
        }
        else
        {

        }
    }

    var myfun = (event) => {
        // console.log("X : ",event.clientX, "X Last : ",sliceingX);
            // console.log("Y : ",event.clientY, "Y Last : ",sliceingY);
            if(myY<sliceingY)
            {
                if(myX<sliceingX)
                {
                    if(myX<event.clientX || myY>event.clientY)
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle+4;
                        myScroll(1);
                        
                    }
                    else
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle-4;
                        myScroll(-1);
                    }
                }
                else
                {
                    if(myX<event.clientX || myY<event.clientY)
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle+4;
                        myScroll(1);
                    }
                    else
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle-4;
                        myScroll(-1);
                    }
                    
                }
            }
            else
            {
                if(myX<sliceingX)
                {
                    if(myX>event.clientX || myY>event.clientY)
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle+4;
                        myScroll(1);
                    }
                    else
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle-4;
                        myScroll(-1);
                    }
                }
                else
                {
                    if(myX>event.clientX || myY<event.clientY)
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle+4;
                        myScroll(1);
                    }
                    else
                    {
                        mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                        currentAngle = currentAngle-4;
                        myScroll(-1);
                    }
    
                }
        
            }
            myX = event.clientX;
            myY = event.clientY;
    }
    
    canvas.addEventListener("mousedown", ()=>{
        canvas.addEventListener("mousemove" , myfun)
    
    })
    
    canvas.addEventListener("mouseup", ()=>{
        canvas.removeEventListener("mousemove", myfun);
    })
    
    mydiv.addEventListener("mouseover", ()=>{
        canvas.removeEventListener("mousemove", myfun);
    })

    canvas.firstChild.addEventListener("click", ()=>{
        console.log("FIRST CHILD");
        window.history.back();
    })
}

function myback(){
    window.history.back();
}

function mainjs()
{
    var myoptions = document.getElementById("options");
    var c = myoptions.children;
    c[1].style.backgroundColor = "yellow";
    for(var i=0; i<myoptions.children.length; i++)
    {
        c[i].style.backgroundColor = "yellow";
        c[i].addEventListener("mouseover", ()=>{
            console.log("CLicked");
        })
    }

}
