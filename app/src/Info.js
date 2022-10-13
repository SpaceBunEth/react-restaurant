import React from "react";

export default function Info(){
    const restaurantInfo = {
      hours:[
      'Monday 8:00am - 5:00pm',
      'Tuesday 8:00am - 5:00pm',
      'Wednesday 8:00am - 5:00pm',
      'Thursday 8:00am - 5:00pm',
      'Friday 8:00am - 9:00pm',
      'Saturday 10:00am - 11:00pm',
      'Sunday Closed'
    ],
      
      phone: '(859)-555-5555',
  
      address:{
        street: '405 East Main Str',
        city: 'Lexingtion',
        state: 'KY',
        zip: '40502'
      }
  
    }
    const [info, setInfo] = React.useState(restaurantInfo);
    console.log(info)
    return(
        <>
        <h1>Info Func run..</h1>
        </>
    );
  }