import React from 'react'
import { Link } from 'react-router-dom'

const MediaHome = () => {
  return (
    <div>
      <div className="user-list">
        <h1>Users</h1>
        <ul>
          <Link to={"/direct"}><li>User 1</li></Link>
          <Link to={"/direct"}><li>User 2</li></Link>
          <Link to={"/direct"}><li>User 3</li></Link>
          <Link to={"/direct"}><li>User 4</li></Link>
          <Link to={"/direct"}><li>User 5</li></Link>
          <Link to={"/direct"}><li>User 6</li></Link>
          <Link to={"/direct"}><li>User 7</li></Link>
          <Link to={"/direct"}><li>User 8</li></Link>
          <Link to={"/direct"}><li>User 9</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default MediaHome
