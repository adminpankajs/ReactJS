import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class HomePage extends Component{
    componentDidMount()
    {
        var canvas = document.getElementById("canvas");
        var mydiv = document.getElementById("customDiv")
        var myX = 0;
        var myY = 0;
        var countDown  = 0;
        var countUp  = 0;
        var sliceingX = canvas.offsetLeft+(canvas.offsetWidth/2);
        var sliceingY = canvas.offsetTop+(canvas.offsetHeight/2);
        var currentActive = 0;
        var myoptions = document.getElementById("options");

        myoptions.children[currentActive].style.backgroundColor = "teal";
        myoptions.children[currentActive].firstChild.style.color = "white";

        mydiv.addEventListener("click", ()=>{
            console.log(currentActive);
            myoptions.children[currentActive].firstChild.click();
        })

        function myScroll(value){
            if(value===1)
            {
                countUp = 0;
                countDown = countDown+1;
                if(countDown>5)
                {
                    myoptions.children[currentActive].style.backgroundColor = "white";    
                    myoptions.children[currentActive].firstChild.style.color = "black";
                    if(currentActive === myoptions.children.length-1)
                    {
                        currentActive = 0;
                    }
                    else
                    {
                        currentActive = currentActive+1;
                    }
                    myoptions.children[currentActive].style.backgroundColor = "teal";    
                    myoptions.children[currentActive].firstChild.style.color = "white";
                    countDown = 0;
                }
                
            }
            else
            {
                countDown = 0;
                countUp = countUp+1;
                if(countUp>5)
                {
                    myoptions.children[currentActive].style.backgroundColor = "white";    
                    myoptions.children[currentActive].firstChild.style.color = "black";
                    if(currentActive === 0)
                    {
                        currentActive = myoptions.children.length-1;
                    }
                    else
                    {
                        currentActive = currentActive-1;
                    }
                    myoptions.children[currentActive].style.backgroundColor = "teal";    
                    myoptions.children[currentActive].firstChild.style.color = "white";
                    countUp = 0;
                }
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
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle+4;
                            myScroll(1);
                            
                        }
                        else
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle-4;
                            myScroll(-1);
                        }
                    }
                    else
                    {
                        if(myX<event.clientX || myY<event.clientY)
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle+4;
                            myScroll(1);
                        }
                        else
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle-4;
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
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle+4;
                            myScroll(1);
                        }
                        else
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle-4;
                            myScroll(-1);
                        }
                    }
                    else
                    {
                        if(myX>event.clientX || myY<event.clientY)
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle+4;
                            myScroll(1);
                        }
                        else
                        {
                            // mydiv.style.transform = 'rotate('+currentAngle+'deg)';
                            // currentAngle = currentAngle-4;
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

    }
    mainjs()
    {
        console.log("HELL BOY");
        var myoptions = document.getElementById("options");
        var c = myoptions.children;
        for(var i=0; i<myoptions.children.length; i++)
        {
            c[i].addEventListener("active", ()=>{
                console.log("CLicked");
            })
        }
    }
    render(){
        return(
            <div style={{height: '100%', width: '100%', backgroundImage: 'url(bg.jpg)', backgroundSize: 'cover'}} >
                <div className="sidePanel">
                    <div className="panelHeading">
                        iPod.js
                    </div>
                    <div id="options">
                        <div>
                            <Link to="/coverflow">
                                CoverFlow
                            </Link>
                        </div>
                        <div>
                            <Link to="/music">
                                Music
                            </Link>
                        </div>
                        <div>
                            <Link to="/games">
                                Games
                            </Link>
                        </div>
                        <div>
                            <Link to="/settings">
                                Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}