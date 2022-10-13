import React from 'react'
import axios from "axios";
import Header from './Header'
import Spinner from './Spinner';
import Menu from './Menu'

    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

    export default function App() {
      const [post, setPost] = React.useState(null);
      
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
      //console.log('AFTER: ',post)
      //console.log(post[0])
      return (
        <>
        <Header/>
        <Menu menuItem={post}/>
        </>
      );
    }
    
