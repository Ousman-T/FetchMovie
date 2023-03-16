# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is a basic app utilizing API, props, and hooks in order to render data to the site that users search for. Created using React.js. 
Pushing to GitHub so I can re-read and study the code in the future. Reference for api usage and syntax.

## Form.js useRef code

import { useRef, useState } from "react";
*************************************************
<!-- function Form(props){
    const inputRef = useRef(null);
    const {movieSearch} = props;
    const handleClick = (e) =>{
        e.preventDefault();
     console.log(inputRef.current.value);
    };
    return(
    <div>
        <form onSubmit={handleClick}>
            <input ref={inputRef} type="text" placeholder="Search Movie By Title..."/>
            <input type="submit"/>
        </form>

    </div>
    );
}; -->

export default Form;
***************************************************