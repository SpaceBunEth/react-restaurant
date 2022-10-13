import React from 'react'
import axios from "axios";
import Header from './Header'
import Spinner from './Spinner';
import Menu from './Menu'

    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

    const objInfo = {
        page: ['Home','Side','Brunch','Appetizer','Dessert','Dinner','Lunch','Breakfast'],
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

    export default function App() {
      const [post, setPost] = React.useState(null);
      const [info, setInfo] = React.useState(objInfo);

      //console.log({post})
    
      React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            //console.log(response)
          setPost(response.data);
        });
      }, []);
    
    
      if (!post) 
      return (
        <>
        <Spinner />
        </>
      );
      console.log('AFTER: ',post)
      //console.log(post[0])
      return (
        <>
        <Header/>
        <Menu menuItem={post}/>
        </>
      );
    }
    
