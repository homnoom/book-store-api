import {useState}from 'react';
import './App.css';
import Card from './Card.js';
import axios from 'axios';


const Main=()=>{
  const[search,setSearch]=useState("");
  const[bookData,setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD4KkoXEOJQxkESPsbOUiFBpUv-qyNM_Hg'+'&maxResults=40')
    .then(res=>setData(res.data.items))
    .catch(err=>console.log(err))
    }
  }
  return(
    <>
    
<div className="header">
<div className="row1">
<h1>BOOKS <br/>FOR ALL</h1>
</div>
<div className="row2">

<div className="search">
<input type="text" placeholder="Enter Your Book Name"
value={search} onChange={e=>setSearch(e.target.value)}
onKeyPress={searchBook}/>


</div>
<p>Regular reading allows you to better formulate your own<br/>
thoughts.Our teams of proffestionals will always help you <br/>
make up your mind and find a book for fun activities</p>
</div>
</div>

<div className="container">
<Card book={bookData}/>

</div>



    </>
  )
}
export default Main;