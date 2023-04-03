import React from 'react'
import Edit from '../Media/pen.png'
import Delete from '../Media/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img alt='Mukund' src='https://images.pexels.com/photos/6740095/pexels-photo-6740095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <div className='user'>
          <img alt='Mukund' src='https://images.pexels.com/photos/6740095/pexels-photo-6740095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
          <div className='info'>
            <span>Mukund</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}><img alt='Mukund' src={Edit} /></Link>
            <Link><img alt='Mukund' src={Delete} /></Link>
          </div>
        </div>
        <h1>
          What is Lorem Ipsum?
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
          Why do we use it?<br></br>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
          Why do we use it?<br></br>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className='menu'><Menu /></div>
    </div>
  )
}

export default Single
