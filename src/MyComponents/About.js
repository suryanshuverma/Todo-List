import React from 'react'

export const About = () => {

    let main = {
        margin: "70px",
        padding : "10px",
        textAlign : "center",
    }

    let first = {
        fontSize: 25,
        color: "#ff4411",
      paddingTop: "10px",
      margin: "23px",
      padding : "10px",
      

    }

    let second={
        margin: "23px",
        padding : "10px",
        fontSize: 19,
    }

    let third = {
        fontSize: 17,
        padding : "5px",
        margin: "23px",
    }
    return (
                            
        <div>
            <h3 className='my-5' style={main}>Welcome to our website. We're glad and grateful you are here. </h3>
            
            <div style={first} >
                Stuck with where to add Task? Searching for Pen and Paper?
            </div>
          <div style={second}>
              Well, Here's the solution .
          </div>
          <div style={third}>
              With this application, you can add your daily task at one place and can delete them as you feel like.
          </div>
        </div>
        
    )

}
