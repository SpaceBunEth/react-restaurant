import React from 'react';
import axios from "axios";
import Hero from './Hero';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Test from './Test'
import Spinner from './Spinner'
import Menu from './Menu';

    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

    //['Home','Side','Brunch','Appetizer','Dessert','Dinner','Lunch','Breakfast']
    //['Home','Breakfast','Brunch','Lunch','Appetizer','Dinner','Side','Dessert']
    const objInfo = {
        page: ['Home','Breakfast','Brunch','Lunch','Appetizer','Dinner','Side','Dessert'],
        pageId: 'Home',
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

    const pageId = 'Home'

    export default function App() {
      const [post, setPost] = React.useState(null);
      const [info, setInfo] = React.useState(objInfo);
      const [page, setpage] = React.useState(pageId)
      const [paginNum, setpaginNum] = React.useState(0)
      console.log('page index in API.js',page)

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
        <Hero />
        <Nav infoState={info} page={pageId} setPage={setpage} setpaginNum={setpaginNum}/>
        {page === 'Home' && <Home/>}
        {page !== 'Home' && <Spinner/>}
        <Footer />
        </>
      );
      //console.log('AFTER: ',post)
      //console.log(post[0])
      return (
        <>
        <Hero />
        <Nav infoState={info} page={pageId} setPage={setpage} setpaginNum={setpaginNum}/>
        {page === 'Home' && <Home/>}
        {page !== 'Home' && <Menu menuItems={post} infoState={info} page={page} paginNum={paginNum} setpaginNum={setpaginNum}/>}
        {/* <Data /> */}
        <Footer />
        </>
      );
    }
    
