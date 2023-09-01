import { React, useState, useEffect } from 'react';

let defaultColor = "rgba(255,255,255, 0.5)"
let num = 0

const FlashingText =()=> {
    const [newColor, setNewColor] = useState(defaultColor);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateColor();
        }, 1000);
        return () => clearInterval(intervalId);
    },[])

    function updateColor () {
        console.log("Hello World!")
        num+=1
        console.log(num)
        setNewColor(update());

    }

    function update() {
        if(num % 2 === 0){
            defaultColor= "rgba(255,255,255, 0.5)";
        } else {
            defaultColor="rgba(0,0,0, 0.5)";
        }
        console.log(defaultColor);
        return(defaultColor)
    }


    return (
        <> 
        <div style={{ backgroundColor:[newColor]}}>
        <h1>Black Friday <strong>Sales</strong></h1>
        <h2>Are almost here...</h2>     
        </div>    
        </>
    );
}

export default FlashingText;
