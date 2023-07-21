import logo from './logo.svg';
import twitterLogo from './twitter.png';
import githubLogo from './github.png';
import linkedinLogo from './linkedin.png';


function App() {
  return (
    <div className="Whole-Conatainer">
      <div className="card">
        <div className="picture-con">
          <img className="picture" src= {logo} />
        </div>
        <div className="details">
          <h3>Muhammad Bin Abdul Ganny</h3>
          <h4>Full Stack Developer</h4>
          <h5>www.website.comS</h5>
          <h2>About</h2>
          <p>I am a full stack developer starting my journy fromm systems </p>
          <h2>Intrest</h2>
          <p>I am a car enthusiast and love doing gym  </p>
        </div>
        <div className="social-icons">
          <img src={twitterLogo} alt="Twitter" />
          <img src={githubLogo} alt="GitHub" />
          <img src={linkedinLogo} alt="LinkedIn" />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
