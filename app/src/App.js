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


  if (!post) 
  return (
    <>
    <h1>Loading</h1>
    </>
  );
  console.log('AFTER: ',post)
  console.log(post[0])
  return (
    <>
    <h1>Loaded</h1>
    </>
  );
}



