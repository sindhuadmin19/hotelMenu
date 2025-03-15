import React, {useState}from "react";
import "./Login.css";
import { RiStarSFill } from "react-icons/ri";


const login=() =>{
 const [formData, setFormData] = useState({
    hotelName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    hotelImage: "",
  });

  const handleChange = (e) => {
    const { name, value, type, Upload } = e.target;
    setFormData({
      ...formData,
      [name]: type === "Upload Hotel Image" ? Upload [0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="hotel-onboarding-container">
          <h2>Create Account</h2>
          <p>Fill your information below or register with your social account</p>
          <form className="hotel-form" onSubmit={handleSubmit}>
            <label><RiStarSFill className="star"/>Hotel Name</label>
            <input
              type="text"
              name="hotelName"
              value={formData.hotelName}
              onChange={handleChange}
              required
            />
    
            <label><RiStarSFill className="star"/>Address Line</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
    
            <div className="input-type">
              <div className="input-group">
                <label><RiStarSFill className="star"/>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label><RiStarSFill className="star"/>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label><RiStarSFill className="star"/>Zip/Pincode</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <label><RiStarSFill className="star"/>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
    
            <label><RiStarSFill className="star"/>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
    
            <label><RiStarSFill className="star"/>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
    
            <label><RiStarSFill className="star"/>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
    
            <label><RiStarSFill className="star"/>Hotel Image</label>
            <input type="Upload Hotel Image" name="Upload Hotel Image"onChange={handleChange} required />
            
            <button type="submit">Sign Up</button>
          </form>
          <div className="signup">
            Or sign up with
          </div>
          <div className="media-icons">
            <div className="mac">1</div>
            <div className="google">2</div>
            <div className="facebook">3</div>
          </div>
        </div>
   
  );
};

export default login;
