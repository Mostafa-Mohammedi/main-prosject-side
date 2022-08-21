import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import react from "./img/react.png";
import html from "./img/html.png";
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import Footer from './component/Footer';





function App() {
 
  return (
    <div>
      <Header 
      header="Main Project site"
      h2="mostafa mohammedi"
      button="watch github"
      />
      <Main 
      img={react}
      alt="react img" 
      icon={ <FaReact/>} 
      icon_content= "react frontend"
      content= "Frontend react project for adding expenses"
      
      imgHtml={html}
      altHtml="html and css website"
      icontentHtml={<AiFillHtml5/>}
      iconHtml = "HTML site"
      contentHtml = "CV page created on HTML, CSS and JS"



      />
      <Footer/>
    </div>
  );
}

export default App;
