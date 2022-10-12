import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

export default function App() {
  const [post, setPost] = React.useState(null);
  
  console.log({post})

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response)
      setPost(response.data);
    });
  }, []);


  if (!post) return null;
  console.log('AFTER: ',post)
  console.log(post[0])
  return (
    <>
    <Info />
    </>
    
    // <div>
    //   <h1>Good Morning</h1>
    //   <p>{post[0].title}</p>
    //   <p>{post[0].price}</p>
    //   {/* <p>{post[0].category.title}</p> */}
    //   <p>{post[0].description}</p>
    // </div>
  );
}

export function Info(){
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
}