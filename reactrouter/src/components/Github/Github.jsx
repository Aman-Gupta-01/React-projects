import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Aman-Gupta-01')
    //     .then(data=>data.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    return(
        <div className="list-none bg-gray-600 text-white text-3xl p-4 text-center m-4 mx-10 rounded-xl">
            <li>Github name: {data.name}</li>
            <li>Github username: {data.login}</li>
            <li>Github Public Reposetry: {data.public_repos}</li>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export const githubInfoLoader = async () =>{
    const data = await fetch('https://api.github.com/users/Aman-Gupta-01')
        return data.json()
}