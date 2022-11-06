import React from "react";
import { useState ,useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

import "./container.css";
import styles from './button.module.css';
import inputStyles from './input.module.css';
import Dialog from './dialog'

export const Container = () =>{

  const navigate = useNavigate();

  const goToHome=()=>{
    navigate(-1)
  }

  const [showMusic, setShowMusic] = useState(false);
  const [showBan, setShowBan]=useState(false);
  const [showflirt,setShowFlirt]=useState(false);
  const [showmeme,setShowMeme]=useState(false);
  const [poll, setPoll] = useState(false);

  const ban=[
    {category:"ban user"},
    {category:"unban user"},
    {category:"kick user"}
  ]


  const music=[
    {category:"play a song"},
    {category:"playskip a song"},
    {category:"playtop a song"},
    {category:"skip song"},
    {category:"stop playing song"},
    {category:"autoplay songs"},
    {category:"use filter for song"},
    {category:"pause song"},
    {category:"resume song"},
    {category:"set volume"},
    {category:"show playlist"},
    {category:"loop a song/playlist"}
  ];

  const pollCategories=[
    {category:"conduct poll"}
  ];

  const meme=[
    {category:"meme"}
  ];

  const flirt=[
    {category:"flirt"}
  ];

  const [musicCategories, setMusicCategories] = useState(music);
  const [banCategories,setBanCategories]=useState(ban);
  const [memeCategories, setMemeCategories] = useState(meme);
  const [flirtCategories, setFlirtCategories] = useState(flirt);

  const [loading,setLoading]=useState(false);
  const [results,showResults] = useState(false);


  const changeMusicState=(e)=>{
    e.preventDefault()
    setShowMusic(!showMusic);
  }

  const changeBanCategories=(e)=>{
    e.preventDefault()
    setShowBan(!showBan);
  }

  const flirtOrNot=(e)=>{
    e.preventDefault()
    setShowFlirt(!showflirt)
  }

  const showMeme=(e)=>{
    e.preventDefault()
    setShowMeme(!showmeme)
  }

  const pollOrNot=(e)=>{
    e.preventDefault();
    setPoll(!poll);
  }


  const saveFormData=async()=>{
    
    // e.preventDefault();
    const data={
      bot_name:"",
      server_name:"",
      command:[],
      desc:[]
    };
    console.log("getting form data........")
    const form = document.getElementById('my_form');
    const formData = new FormData(form);
    

    for (const [key, value] of formData) {
      if(key=="bot_name")data[key]=value
      if(key=="server_name")data[key]=value;
      if(key=="command")data[key].push(value);
      if(key=="desc")data[key].push(value);
    }

    console.log(data)

    const endpoint="https://botx-discord.herokuapp.com/save-bot";


    const response = await fetch(endpoint, {
      method: "post",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) 
    });

    console.log(response.json());
    
    if ("errors" in response)console.error(response)
    console.log("success")
    
  }

  return (
    <>
    <div>

    <i class='fas fa-chevron-left back' style={{fontSize:"48px",color:"white",fontWeight:"bolder",background:"transparent"}} onClick={goToHome}></i>
    <h1 className="heading">
      Build-Your-BotX
    </h1>
    <form action="#" id="my_form" >
    <div className="welcome">
      <div className="wlI">
    <input type="input" class="form__field" placeholder="Bot Name" name="bot_name" id='name' required />
    <input type="input" class="form__field" placeholder="Server Name" name="server_name" required />
    </div>
    <div className="create-a-bot">  


      <img src="https://i.pinimg.com/originals/f6/d7/ef/f6d7ef4b5b015be7cf607e2087c0a244.png" alt="" />
     </div>
     </div>

     <div class={styles.container}>
        <div class={styles.btn} onClick={changeMusicState}><a href="#">MUSIC</a></div>  
        <div class={styles.btn} onClick={changeBanCategories}><a href="#">BAN</a></div>  
        <div class={styles.btn} onClick={flirtOrNot}><a href="#">FLIRT</a></div>  
        <div class={styles.btn} onClick={showMeme}><a href="#">MEME</a></div>  
        <div class={styles.btn} onClick={pollOrNot}><a href="#">POLL</a></div>  
    </div>

      {
        showMusic && musicCategories.map((singleCategory,index)=>{
          return <div key={index} className="categories">
            <input type="text" name="command" value={singleCategory.category} readonly/>

            <div class={inputStyles.webflow}>
              <input class="" type="text" name="desc" placeholder="Enter the command"></input>
            </div>
          </div>
        })
      },
      {
        showmeme && memeCategories.map((singleCategory,index)=>{
          return <div key={index} className="categories">
          <input type="text" name="command" value={singleCategory.category} readonly/>

          <div class={inputStyles.webflow}>
            <input class="" type="text" name="desc" placeholder="Enter the command"></input>
            
          </div>
        </div>
        })
      },
      {
        showflirt && flirtCategories.map((singleCategory,index)=>{
          return <div key={index} className="categories">
          <input type="text" name="command" value={singleCategory.category} readonly/>

          <div class={inputStyles.webflow}>
            <input class="" type="text" name="desc" placeholder="Enter the command"></input>
            
          </div>
        </div>
        })
      },
      {
        showBan && banCategories.map((singleCategory,index)=>{
          return <div key={index} className="categories">
          <input type="text" name="command" value={singleCategory.category} readonly/>

          <div class={inputStyles.webflow}>
            <input class="" type="text" name="desc" placeholder="Enter the command"></input>
            
          </div>
        </div>
        })
      },
      {
        poll && pollCategories.map((singleCategory,index)=>{
          return <div key={index} className="categories">
          <input type="text" name="command" value={singleCategory.category} readonly/>

          <div class={inputStyles.webflow}>
            <input class="" type="text" name="desc" placeholder="Enter the command"></input>
            
          </div>
        </div>
        })
      },
            <Dialog
        render={({ close, labelId, descriptionId }) => (
          <div className="dialogBox">
            <div className="botan">
            <h1 className="bothead" id={labelId}>Click below to get your Bot</h1>
            <a href="https://discord.com/api/oauth2/authorize?client_id=1036664574851698720&permissions=4398046511095&scope=bot" >
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ofa3xwo7.json" background="transparent" speed="1" loop="" autoplay=""></lottie-player></a>
            
            <button onClick={close}  style={{display:"none"}}></button>
            </div>
          </div>
        )}
      >
        {/* <button id="clkBtn" style={{display:"none"}} onClick={(e)=>{e.preventDefault();console.log('clicked')}} ref={myRef}>button</button> */}

    <button class={styles.an2} onClick={(e)=>{e.preventDefault();saveFormData()}} href="#" style={{"margin-bottom":"7vh"}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        SUBMIT
        
    </button>
    </Dialog>
    
    </form>
    {
      loading && <Spinner/>
    }
    </div>
    </>
  );
}
