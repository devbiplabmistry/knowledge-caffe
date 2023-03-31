import './MainData.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const MainData = (props) => {
  const { img, id, Author_image, Author_name, Read_Time, Publish_Date, Read_Title } = props.name

  return (
    <div className="data">
        <div className="cover-img">
          <img src={img} alt="coverImage" />
        </div>
        <div className="author-details">
          <div className='author-container'>
            <div>
              <div className="author-wrapper">
                <div className='authorImage'>
                  <img src={Author_image} alt="" />
                </div>
                <div>
                  <p className='AuthorName'>{Author_name}</p>
                  <p className='publishDate'>{Publish_Date}</p>
                </div>
              </div>
            </div>
           <div>
           <p  className='readingTime'>{Read_Time} </p>
            <span onClick={()=>props.handleBookmark(props.name)}>
               <FontAwesomeIcon icon={faBookBookmark} /></span>
           </div>
          </div>
          <h1 className='Title'>{Read_Title}</h1>
          <span className='HasTag'>#beginners</span>
          <span className='HasTag'>#programming</span>
          <li onClick={()=>props.handleTime(Read_Time)}
           className='more'><a href="#">mark as read</a></li>
        </div>
    
    </div>
  );
};

export default MainData;