
import React,{useState,useEffect} from "react";
import './Navbar.css';
import App from '../App.js'
import Raffles from "../pages/Raffles.js";
import Giveaways from "../pages/Giveaways.js";
import Tipping from "../pages/Tipping.js";
import Leaderboard from "../pages/Leaderboard.js";
import Account from "../pages/Account.js";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";




const { URLSearchParams } = require('url');
const DiscordOauth2 = require("discord-oauth2");




const Navbar = () => {
const [userID, setUserID] = useState(0);
const [userName, setUserName] = useState(' ');
var dc_user = localStorage.getItem('username');
var dc_id=localStorage.getItem('id');
var dc_avatar=localStorage.getItem('avatar');
function purgeDC(){
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  window.location.reload();
};


//dc_user="hallo";
var dc_url="https://discord.com/api/oauth2/authorize?client_id=981929630699233320&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify%20guilds";
//dc_url="https://discord.com/api/oauth2/authorize?client_id=981929630699233320&redirect_uri=https%3A%2F%2Fdev.d356ecslpncal.amplifyapp.com%2F&response_type=code&scope=identify";
async function DCredirect(){
  window.location.href = dc_url};

  // get the window dimensions
    const [windowDimenion, detectHW] = useState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })

const detectSize = () => {
  detectHW({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })
}
var redirectUri="http://localhost:3000/"
//redirectUri="https://dev.d356ecslpncal.amplifyapp.com/"
useEffect(() => {
  window.addEventListener('resize', detectSize)
  if (!dc_user)
  {
    let params = (new URL(document.location)).searchParams;
    let code = params.get('code'); // gets the discord code
    if (code===null)
    {
      console.log("code is null")
    }
    else{
      const oauth = new DiscordOauth2();
      //gets the acess token
      
        oauth.tokenRequest(
          {
            clientId: "981929630699233320",
            clientSecret: "Azec-8As2yxQ6qnndRBu4MDlAS80AQRc",
            grantType: "authorization_code",
            code: code,
            redirectUri: redirectUri,
          }).catch(error => console.log(error.message))
          .then(val=>
            {
            console.log(val['access_token']);
            const access_token = val['access_token'];
            console.log("access granted");
            oauth.getUser(access_token).then(val2 => 
              {
                setUserID(val2['id']);
                setUserName(val2['username']);
                //store in local users browser
                localStorage.setItem("id", val2['id']);
                localStorage.setItem("username", val2['username'])
                localStorage.setItem("avatar",val2['avatar']);
                console.log(val2);
                window.location.href=redirectUri;
              }
              ).catch(error => console.log(error.message));
            }).catch(error => console.log(error.message));
  
          }
    }

  return () => {
    window.removeEventListener('resize', detectSize)
  }
}, [windowDimenion,dc_user])

// end
var NavBar=( 
<div>

    <div className="container" >
      <div className="item">
      <Link to={`/`}>
        <div className="itemText">      
          Dashboard
        </div>
        </Link>
      </div>
      <div className="item">

      <Link to={`/raffles`}>
      <div className="itemText">
        Raffles

      </div>
      </Link>
      </div>
      <div className="item">

      <Link to={`/giveaways`}>
      <div className="itemText">
        Giveaways

        
      </div>
      </Link>
      </div>
      <div className="item">
      <Link to={`/tipping`}>
        <div className="itemText">

        Tipping

        </div>
        </Link>
      </div>
      <div className="item">
      <Link to={`/leaderboard`}>
        <div className="itemText">

        Leaderboard

        </div>
        </Link>
      </div>

      <div className="item">
      <Link to={`/account`}>
        <div className="itemText">

        Account

        </div>
        </Link>
      </div>
    </div>
 </div>
  );








var hidden=false;
if (windowDimenion.winWidth<=700)
{
  hidden=true;
}
else
{
  hidden=false;
}


  return (
    <html>
    <header className="App-header">
    
    <div className="Sidebar"
    style={ !hidden ? { display:'block'} : {display : 'none'} } 
     >
      <div className="Header">

      </div>
      <div className="NavBar">
        {NavBar}
      </div>
      <div className="dcPanel">
        <button 
        className="dcButton"
        style={ !dc_user ? { display:'block'} : {display : 'none'} } 
       onClick={DCredirect}      
        >
          Login with Discord
        </button>
        <div
        className="dcUser"
        style={ dc_user ? { display:'flex'} : {display : 'none'} } 
        >
          <div className="dcIcon">
            
            <img className="dcIconImage"
            src={"https://cdn.discordapp.com/avatars/"+ dc_id +"/"+dc_avatar+".png"}
            > 
  </img>
          </div>
         
          <div className="dcUserName">
            {dc_user
            }
          </div>
          <div className="dcLogout">
           <button className="LogoutButton" onClick={purgeDC}>
              Logout
          </button>
       </div> 
        </div>

      </div>

    </div>
    <div className="PageSource">

    </div>
    </header>
    </html>
  );
};
  
export default Navbar;