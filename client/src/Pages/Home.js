import React from 'react'
import { Container, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      "id": 1,
      "title": "Product 1 My name is Mukund Ojha and I am currently studying in chitkara univeristy",
      "description": "This is the first product",
      "image": "https://images.pexels.com/photos/6740106/pexels-photo-6740106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 2,
      "title": "Product 2",
      "description": "This is the second product",
      "image": "https://images.pexels.com/photos/6740109/pexels-photo-6740109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 3,
      "title": "Product 3",
      "description": "This is the third product",
      "image": "https://images.pexels.com/photos/6740095/pexels-photo-6740095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ]

  return (
    <div className='home'>
      <div className='posts'>
      {posts.map(post =>(
        <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.image}/>
              </div>
              <div className='content'> 
                <Link className='text-decoration-none text-black' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>
                  {post.description}
                </p>
                <button>Read More</button>
                </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Home
