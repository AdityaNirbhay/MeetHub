import logo from './logo.svg';
import './App.css';

function App() {
  function openMeeting(){
      document.querySelector(".generate-meet").addEventListener("click", function(){
      document.body.classList.add("active-popup");
    });
  }

  function closeMeeting(){
      document.querySelector(".popup .close-btn").addEventListener("click", function(){
      document.body.classList.remove("active-popup");
    });
  }

  const joinMeeting = () => {
    console.log("Joining meeting")
  }
  
  return (
    <div>
    <div className="wrapper">

        <img src="8c98994518b575bfd8c949e91d20548b.jpg" alt="" className="background-img" />

        <div className="navbar">

            <div className="left-corner">
                <img src="favicon.png" alt="Logo-image" className="logo-image" />
                <div className="logo-text">meetHub</div>
            </div>

            <div className="right-corner">
                
                <div className="login-button">Login</div>
                
                <div className="signup-button">Sign Up</div>
                
            </div>
        </div>


        <div className="main-section">

            <div className="left-part">
                <div className="display-text">
                    Seamless Meetings, <br /> Superior Collaboration
                </div>
                <div className="button-join">
                    <div className="generate-meet" onClick={openMeeting}>New Meeting</div>
                    <input className="input-label" type="text" placeholder="Enter a code" />
                    <div className="join-meet">Join</div>
                </div>
            </div>

            <div className="right-part">
                <div className="video-part">
                    <video src="vecteezy_2d-people-in-meeting_35616783.mp4" autoPlay loop muted className="video"></video>
                </div> 
            </div>

        </div>

    </div>

    <div className="popup">
        <button className="close-btn" onClick={closeMeeting}>✖</button>
        <div className="meeting-details">
            <div className="meeting-id">
                Meeting ID : <span id="randomMeetingId">ABC123</span>
            </div>
            <button className="start-meeting" onClick={joinMeeting}>Start Meeting</button>
        </div>
    </div>

</div>
  );
}

export default App;
