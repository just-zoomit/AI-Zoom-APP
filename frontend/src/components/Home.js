import React from 'react'
import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import save from '../assets/bookmark.svg'
import rocket from '../assets/rocket.svg'

function Home() {
  return (
    <>
    <div className='chatApp'>
    <div>Home</div>
    <div className='sideBar'>

    <div className='upperSide'>
    <div className='upperSideTop'> <img src={gptLogo} alt='Logo' className='logo'/> <span className='brand'>ZoomGPT</span>
    <button className='midBtn'> <img src={addBtn} alt='Chat' className='addBtn'/> New Chat </button>
   
   <div className='upperSideBottom'>
   <button className='query'><img src={msgIcon} alt='Query' className='query'/>What is programming?</button>
   <button className='query'><img src={msgIcon} alt='Query' className='query'/>What is programming?</button>



   </div>

   

   </div>

   
   </div>
<hr/>
   <div className='lowerSide'>
   <button className='listItems'><img src={home} alt='Home' className='listItemsImg'/> Home</button>
   <button className='listItems'><img src={save} alt='Save' className='listItemsImg'/> Save</button>
   <button className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg'/> Upgrade To Pro</button>
</div>

   
   </div>

   <div className='main'>

   
   </div>
   </div>

    </>
  )
}

export default Home