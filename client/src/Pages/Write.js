import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='title' />
        <div className='editorText'> <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} /></div>
      </div>
      <div className='menu'>
        <div className='item'><h1>Publish</h1>
          <span>
            <b>Status : </b> Draft
          </span>
          <span>
            <b>Visibility : </b> Public
          </span>
          <input type='file' style={{ display: "none" }} name='' id='file' />
          <label htmlFor='file' className='file'>Upload Image </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='Cat'>
            <input type='radio' name='mukund' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='Cat'>
            <input type='radio' name='mukund' value='science' id='science' />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='Cat'>
            <input type='radio' name='mukund' value='technology' id='technology' />
            <label htmlFor='art'>Technology</label>
          </div>
          <div className='Cat'>
            <input type='radio' name='mukund' value='cinema' id='cinema' />
            <label htmlFor='art'>Cinema</label>
          </div>
          <div className='Cat'>
            <input type='radio' name='mukund' value='design' id='design' />
            <label htmlFor='art'>Deisgn</label>
          </div>
          <div className='Cat'>
            <input type='radio' name='mukund' value='food' id='food' />
            <label htmlFor='art'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
