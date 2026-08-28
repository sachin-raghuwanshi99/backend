import React, { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://imgs.search.brave.com/-05fbPltMbr-pWaGHNRXlLeh5j1HvTX8ZaztxsZ_-eE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vYW5pbWUtc2Ft/dXJhaS1jeWJlcnB1/bmtfODM5MTgyLTE2/NjAuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
            caption:"Samurai"
        }
    ])

    useEffect(()=>{

        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            
            setPosts(res.data.posts)
        })

    },[])

  return (
    <section className='flex flex-col items-center justify-start gap-5 h-full w-full p-5 bg-gray-300'>
        {
            posts.length>0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='p-5 rounded-lg shadow-sm w-100 mb-5 bg-white'>
                        <img className='max-w-full rounded-lg mt-2.5' src={post.image} alt='{post.caption}'/>
                        <p>{post.caption}</p>
                    </div>
                ))
            ): (
                <h1>No posts availavle</h1>
            )
        }
    </section>
  )
}

export default Feed