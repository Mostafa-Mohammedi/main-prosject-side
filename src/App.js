import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import react from "./img/react.png";
import html from "./img/html.png";
import net from "./img/NET.png";

import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { GoDatabase } from "react-icons/go";

import Footer from './component/Footer';





function App() {
 
  return (
    <div>
      <Header 
      header="Main Project site"
      h2="mostafa mohammedi"
      />
      <Main 
      imgreact={react}
      altreact="react img" 
      iconreact={ <FaReact/>} 
      icon_contentreact= "react frontend"
      contentreact= "Frontend react project for adding expenses"
      
      imgHtml={html}
      altHtml="html and css website"
      icontentHtml={<AiFillHtml5/>}
      iconHtml = "HTML site"
      contentHtml = "CV page created on HTML, CSS and JS"
      
      imgNet={net}
      altNet="html and css website"
      icontentNet={<GoDatabase/>}
      iconNet = ".Net core Rest APi"
      contentNet = "Reading Fixer API  data and saving data to SQL server"
      
      />
      <Footer/>
    </div>
  );
}

export default App;
