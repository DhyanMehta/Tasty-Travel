import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is the last imported JavaScript file
import logo from '../assets/icon.png';
import '../css/Navbar.css';
import {useAuth0} from "@auth0/auth0-react";
import React, { useState, useEffect } from 'react'; // Added createContext and useContext imports
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {

  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Track loading state
  const   { isLoading,isAuthenticated,user}=useAuth0();




  // Function to fetch user profile
  const fetchUserProfile = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setLoading(false); // No token, so stop loading
        return;
      }

      const response = await fetch('http://localhost:5000/api/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      } else {
        console.error('Failed to fetch profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false); // Stop loading after attempt
    }
  };

  // Fetch user profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUserProfile(null);
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Tasty Travel Logo" width="80" className="navbar-logo" />
          </Link>
          <div className="fs-3 text-light ms-3" id="name">Tasty Travel</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex align-items-center ms-auto">
              {localStorage.getItem("authToken") ? (
                <>
               
                  <Link id="profile" className="btn" data-bs-toggle="offcanvas" to="#offcanvasProfile" role="button" aria-controls="offcanvasProfile">
                    <i className="ri-user-line"></i> Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link id="login" to="/login" className="btn">
                    <i className="ri-login-box-line"></i> Login
                  </Link>
                  <Link id="signup" to="/createuser" className="btn">
                    <i className="ri-user-add-line"></i> Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        
      </nav>

      {/* Profile Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasProfile" aria-labelledby="offcanvasProfileLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasProfileLabel">
      {userProfile ? `Hello, ${userProfile.username}` : 'User Profile'}
    </h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    {isLoading ? (
      <>
        <p>Loading user profile...</p>
      </>
    ) : (
      <div>
        {isAuthenticated &&
        <div>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      {/* Add any additional user data here */}
      </div>
        }
      </div>
    )}
    <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
  </div>
</div>

     

    
    </div>
  );
}

export default Navbar;
