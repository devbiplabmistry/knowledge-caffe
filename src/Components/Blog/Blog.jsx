import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
          <div>
           
          <p>1.Props vs state</p>
            <p>The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child</p>
         </div>
          <div>
            <p>2.How does usestate works ?</p>
            <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
          </div>
          
         <div>
         <p>3.purpose of useEffect other than fetching Data?</p>
            <p>Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user</p>
         </div>
<div>
            <p>4.How does react works ?</p>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
         </div>
        </div>
    );
};

export default Blog;