import React from 'react'


const Menu = () => {

  const posts = [
    {
      "id": 1,
      "title": "Product 1",
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
    <div className='menu'>
      <h1>Other Posts You May Like</h1>
      {posts.map(post => (
        <div className='post' key={post.id}>
          <img src={post.image} alt='Mukund'/>
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
