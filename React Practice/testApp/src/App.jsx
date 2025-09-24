import { useState, useEffect } from "react";
import './assets/JobCard.css';
import './App.css';
import logo1 from './assets/icons/11.png';
import logo2 from './assets/icons/12.png';
import logo3 from './assets/icons/13.png';
import logo4 from './assets/icons/14.png';
import logo5 from './assets/icons/15.png';
import logo6 from './assets/icons/16.png';


const Card =({logo,company,title,dates,cta}) =>{
  const [Added, setAdded] = useState(false);

  useEffect(()=>{
    console.log(`${title} has added : ${Added}`);
  });
  return(
    <>
    
    <div className="job-card">
      <img src={logo} alt="Company A Logo" className="job-logo" /> 
      <div className="job-info">
        <span className="company-name">{company}</span>
        <h3 className="job-title">{title}</h3>
        <span className="job-dates">{dates}</span>
        <button className="wishlist-button" onClick={()=>{setAdded(!Added)}}>{Added? "❤️ Added to wishlist" : "🤍 Add to wishlist"} </button>
        <a href="#" className="learn-more">Learn More</a>
      </div>
    </div>
    </>
  )
}

const App = () =>{
  return (
    <div className="main-container">
    <h1>My React Test App</h1>
    <div className="job-card-container">
    <Card logo={logo1} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17"/>
    <Card logo={logo2} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17" />
    <Card logo={logo3} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17"/>
    <Card logo={logo4} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17"/>
    <Card logo={logo5} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17" />
    <Card logo={logo6} company="BBB Pvt ldd." title="Human Resource Manager" dates="January 15 -February 17"/>
    </div>
    </div>
  )
}

export default App;