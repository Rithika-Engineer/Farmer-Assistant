import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Profile() {

  const { lang } = useLanguage();     // ta / en
  const navigate = useNavigate();

  const [farmerName, setFarmerName] = useState("");
  const [village, setVillage] = useState("");
  const [land, setLand] = useState("");
  const [crop, setCrop] = useState("");
  const [phone, setPhone] = useState("");

  const saveProfile = () => {

    localStorage.setItem("farmerName", farmerName);
    localStorage.setItem("village", village);
    localStorage.setItem("land", land);
    localStorage.setItem("crop", crop);
    localStorage.setItem("phone", phone);

    alert(
      lang === "ta"
        ? "சுயவிவரம் வெற்றிகரமாக சேமிக்கப்பட்டது"
        : "Profile saved successfully"
    );

    navigate("/home");
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        {/* Title */}
        <h2 style={styles.title}>
          {lang === "ta" ? "விவசாயி சுயவிவரம்" : "Farmer Profile"}
        </h2>

        {/* Name */}
        <label style={styles.label}>
          {lang === "ta" ? "பெயர்" : "Name"}
        </label>
        <input
          style={styles.input}
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          placeholder={lang === "ta" ? "உங்கள் பெயர்" : "Enter your name"}
        />

        {/* Village */}
        <label style={styles.label}>
          {lang === "ta" ? "கிராமம் / இடம்" : "Village / Location"}
        </label>
        <input
          style={styles.input}
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          placeholder={lang === "ta" ? "கிராமத்தின் பெயர்" : "Village name"}
        />

        {/* Land */}
        <label style={styles.label}>
          {lang === "ta" ? "நில அளவு (ஏக்கர்)" : "Land Size (acres)"}
        </label>
        <input
          style={styles.input}
          value={land}
          onChange={(e) => setLand(e.target.value)}
          placeholder={lang === "ta" ? "உதா: 2.5" : "Eg: 2.5"}
        />

        {/* Crop */}
        <label style={styles.label}>
          {lang === "ta" ? "பயிர் வகை" : "Crop Type"}
        </label>
        <input
          style={styles.input}
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          placeholder={lang === "ta" ? "உதா: நெல்" : "Eg: Paddy"}
        />

        {/* Phone */}
        <label style={styles.label}>
          {lang === "ta" ? "தொலைபேசி எண் (விருப்பம்)" : "Phone (optional)"}
        </label>
        <input
          style={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={lang === "ta" ? "உங்கள் எண்" : "Phone number"}
        />

        {/* Save Button */}
        <button style={styles.button} onClick={saveProfile}>
          {lang === "ta" ? "சேமிக்கவும்" : "Save"}
        </button>

      </div>
    </div>
  );
}



const styles = {

  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(#c8f7c5,#7bed9f)"
  },

  card:{
    width:"92%",
    maxWidth:"420px",
    background:"white",
    borderRadius:"20px",
    padding:"22px",
    boxShadow:"0 6px 16px rgba(0,0,0,0.25)"
  },

  title:{
    textAlign:"center",
    color:"#1e8449",
    marginBottom:"10px"
  },

  label:{
    fontWeight:"bold",
    marginTop:"12px",
    display:"block"
  },

  input:{
    width:"100%",
    padding:"10px",
    borderRadius:"10px",
    border:"1px solid #bbb",
    marginTop:"5px"
  },

  button:{
    width:"100%",
    marginTop:"20px",
    padding:"12px",
    borderRadius:"12px",
    border:"none",
    background:"#27ae60",
    color:"white",
    fontWeight:"bold",
    fontSize:"17px",
    cursor:"pointer"
  }
};

