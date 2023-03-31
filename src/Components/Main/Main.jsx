import './Main.css'
import React, { useEffect, useState } from 'react';
import MainData from '../MainData/MainData';
import Show from '../Show/Show';

const Main = () => {
    const [data, setData] = useState([])
    const [BookMark,setBookMark] =useState([])
    const [Time,setTime]=useState(0)
    const [Title,setTitle]=useState([])
 
console.log(Title);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    const handleBookmark =(id)=>{
        // console.log(id);
        const newBookMark=[...BookMark,id]
        setBookMark(newBookMark)
        const b=[...Title,id]
        setTitle(b)
    }

    const handleTime=(time)=>{
        const onlyTime=parseInt(time)
      const  initTime=Time+onlyTime;    
   setTime(initTime)
    }
  
    return (
        <div className='main-container'>
                <div >
                    {
        data.map(data => <MainData key={data.id} 
            handleBookmark={handleBookmark} 
            handleTime={handleTime}
            name={data}></MainData>)
                    }
                </div>
               <div>
               <Show times={Time} title={Title}  name={BookMark}></Show>
               </div>
          
        </div>
    );
};

export default Main;