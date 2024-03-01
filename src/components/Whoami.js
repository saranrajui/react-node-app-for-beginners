import React, { useEffect, useState } from 'react'
import RestService from '../restService/RestService';
import Post from './PostComponent/Post';
import Loading from '../shared/Component/Loading';



function Whoami() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();
  const restService = new RestService();

  useEffect(() => {
    Promise.resolve()
    .then(() => restService.hello())
    .then((response) => {
      console.log("response received, " , response)
    })
    .catch((error) => {
      console.log("error occured", error);
    })
  }, []);

  useEffect(() => {
    Promise.resolve()
      .then(() => setIsLoading(true))
      .then(() => restService.getAllPosts())
      .then((response) => {
        setPosts(response.data);
        console.log("Posts", posts)
      }).finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
  }, []);

  const renderList = () => {
    return(
    <>
      <div className='col-md-6'>
        {posts?.map((post, index) => {
          return (index <= 49) ? <Post key={index} post={post} /> : null;
        })}
      </div>
      <div className='col-md-6'>
        {posts?.map((post, index) => {
          return (index >= 50) ? <Post key={index} post={post} /> : null;
        })}
      </div>
    </>)
  }

  return (
    <>
      <div className='row'>
        <h2>This data is being pulled from <code>https://jsonplaceholder.typicode.com/posts</code> </h2>
        <h3><code>{JSON.stringify({isLoading: isLoading.toString()}) } </code></h3>
      </div>
      {isLoading ? <Loading /> :
        renderList()
      }
    </>
  )
}

export default Whoami