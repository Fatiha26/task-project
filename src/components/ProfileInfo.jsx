import profilePic from '../assets/image/profile-pic2.png';

const ProfileInfo = () => {
  return (
    <>
    <div>
    <img src={profilePic} alt="profile image" />
      <div>
         <h2>John Doe</h2><span></span><span>@johndoe</span>
         <p>Astrophotographer 🌌 <br/>
         Gamer 👾</p>
      </div>
      <div>
         <a href="#">Follow</a>
      </div>
    </div>     
      
    </>
  )
}

export default ProfileInfo
