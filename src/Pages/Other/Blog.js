import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 container px-12'>
            <h1 className='text-4xl uppercase font-bold text-center'>Here is some of my latest Blogs</h1>
            <div className='my-12'>
                <h2 className='text-2xl font-semibold my-3'>1.How will you improve the performance of a React Application?</h2>

                <p className='text-xl '>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                    <p>  1. Keeping component state local where necessary.</p>
                    <p> 2. Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>   3. Code-splitting in React using dynamic import()</p>
                    <p>   4. Windowing or list virtualization in React.</p>
                    <p>5.Lazy loading images in React.</p>

                </p>
            </div>
            <div className='my-12'>
                <h2 className='text-2xl font-semibold my-3'>2.What are the different ways to manage a state in a React application?</h2>

                <p className='text-xl '>There are four main types of state Ineed to properly manage in myReact apps:
                    <p>  1. Local state.</p>
                    <p> 2. Global state.</p>
                    <p>   3.Server state</p>
                    <p>   4.URL state.</p>
                </p>
            </div>
            <div className='my-12'>
                <h2 className='text-2xl font-semibold my-3'>3.How does prototypical inheritance work?</h2>

                <p className='text-xl '>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

            </div>
            <div className='my-12'>
                <h2 className='text-2xl font-semibold my-3'>4.1. What is a unit test?</h2>

                <p className='text-xl '>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers. Unit Tests isolate a section of code and verify its correctness.</p>

                <h2 className='text-2xl font-semibold my-3'>4.2.Why should write unit tests?</h2>

                <p className='text-xl '>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers. Unit Tests isolate a section of code and verify its correctness.</p>

            </div>
        </div>
    );
};

export default Blog;