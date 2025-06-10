import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://api.github.com/users/riishraj1821')
    .then(response=>response.json())
    .then(data=>{
        setData(data)
    })
    }, [])
    

  return (
    <>
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Follower: {data.followers}</div>
    <img   src={data.avatar_url} width={300}/>
    </>
  )
}

export default Github