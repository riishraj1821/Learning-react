import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Id} = useParams()
  return (
    <div>User: {Id}</div>
  )
}

export default User