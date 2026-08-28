import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res) =>{

            navigate("/feed")

        })
        .catch((err)=>{
            console.log(err)
            alert("error creating post")
        })
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">

        <section className="bg-gray-200 text-blue-600 p-7 w-full max-w-md rounded-xl flex flex-col items-center gap-6 ">

            <h1 className="text-3xl font-mono font-bold bg-indigo-600 shadow-lg shadow-indigo-600/50 text-gray-200 w-fit px-3 py-1 rounded-3xl text-center">
            Create post
            </h1>

            <form onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 w-full">

                <input
                    className="border-blue-600 border-2 rounded-md cursor-pointer px-3 py-2 w-full"
                    accept="image/*"
                    type="file"
                    name="image"
                />

                <input
                    required
                    type="text"
                    name="caption"
                    placeholder="Enter your caption here"
                    className="border-blue-600 border-2 rounded-md px-3 py-2 w-full"
                />

                <button
                    className="border-2 border-green-600 text-gray-200 bg-green-600 rounded-md px-3 py-2 font-bold cursor-pointer active:scale-80"
                    type="submit"
                >
                    Submit
                </button>

            </form>

        </section>

    </div>
  )
}

export default Createpost