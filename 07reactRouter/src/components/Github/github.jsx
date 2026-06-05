import React, { useEffect, useState }  from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState({})
  // useEffect(() => {
  //     fetch('https://api.github.com/users/mynk1612')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  // if (!data) return <div>Loading...</div>

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    
    <img src={data.avatar_url} alt="Git picture" width={300} height={300} /></div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mynk1612')
  return response.json()
}