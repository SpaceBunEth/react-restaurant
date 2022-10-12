import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

export default function App() {
  const [post, setPost] = React.useState(null);

  console.log({post, setPost})

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}