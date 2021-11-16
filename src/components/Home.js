import React from 'react'

const Home = (p) => {
 
    const {num1 , arr1 }= p;
    return (
        <div>
            <h1>{num1} {arr1}</h1>
        </div>
    )
}

export default Home
