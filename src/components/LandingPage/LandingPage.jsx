/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';

import profilePicture from '../../profile/profilePicture.jpg';

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
      <img className='profile-picture rounded img-responsive'
      src={profilePicture} />
    </div>
  );
}
