import { React, useState, useEffect } from 'react';

let defaultColor = "gold"
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
            defaultColor= "black";
        } else {
            defaultColor="gold";
        }
        console.log(defaultColor);
        return(defaultColor)
    }


    return (
        <> 
        <h1 style={{ color:[newColor] }}>Black Friday <strong>Sales</strong></h1>
        <h2>Are almost here...</h2>         
        </>
    );
}

export default FlashingText;
