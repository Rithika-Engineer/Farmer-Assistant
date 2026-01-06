import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const [farmerName, setFarmerName] = useState("");
  const [village, setVillage] = useState("");
  const [land, setLand] = useState("");
  const [crop, setCrop] = useState("");

  useEffect(() => {
    setFarmerName(localStorage.getItem("farmerName") || "");
    setVillage(localStorage.getItem("village") || "");
    setLand(localStorage.getItem("land") || "");
    setCrop(localStorage.getItem("crop") || "");
  }, []);

  const navigate = useNavigate();

  return (
    <div style={{ maxWidth:"450px", margin:"auto", padding:"10px" }}>

      {/* APP TITLE */}
      <div style={{
        background:"#0b8d2c",
        color:"white",
        padding:"12px",
        borderRadius:"10px",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:"20px"
      }}>
        விவசாயி உதவியாளர்
      </div>

      {/* PROFILE CARD */}
      <div style={{
        background:"#ffffff",
        marginTop:"15px",
        padding:"14px",
        borderRadius:"15px",
        boxShadow:"0 2px 8px rgba(0,0,0,.15)"
      }}>
        <h3>வணக்கம் {farmerName || "விவசாயி"} 🙂</h3>
        <p>🏡 கிராமம்: {village || "-"}</p>
        <p>🌾 நில அளவு: {land || "-"}</p>
        <p>🌱 பயிர்: {crop || "-"}</p>

        <button
          onClick={() => navigate("/profile")}
          style={{
            marginTop:"10px",
            padding:"8px 14px",
            background:"#0b8d2c",
            color:"white",
            border:"none",
            borderRadius:"8px"
          }}
        >
          விவரத்தை மாற்ற
        </button>
      </div>


      {/* MENU BUTTONS */}
      <div style={{marginTop:"18px"}}>

        <div style={{display:"flex", gap:"12px", marginBottom:"12px"}}>
          <button style={btn} onClick={()=>navigate("/weather")}>🌥 வானிலை</button>
          <button style={btn} onClick={()=>navigate("/natural")}>🌾 இயற்கை வேளாண்மை</button>
        </div>

        <div style={{display:"flex", gap:"12px", marginBottom:"12px"}}>
          <button style={btn} onClick={()=>navigate("/pesticide")}>🪴 பூச்சி கட்டுப்பாடு</button>
          <button style={btn} onClick={()=>navigate("/profit")}>💰 லாபம் கணக்கு</button>
        </div>

        <div style={{display:"flex", gap:"12px", marginBottom:"12px"}}>
          <button style={btn} onClick={()=>navigate("/market")}>🏪 சந்தை விலை</button>
          <button style={btn} onClick={()=>navigate("/schemes")}>📚 அரசு திட்டங்கள்</button>
        </div>

        {/* ⭐ JOBS BUTTON ROW — HERE */}
        <div style={{display:"flex", gap:"12px", marginBottom:"12px"}}>
          <button style={btn} onClick={()=>navigate("/videos")}>🎥 கற்றல் வீடியோ</button>

          {/* 👇 JOBS BUTTON */}
          <button style={btn} onClick={()=>navigate("/jobs")}>
            👨‍🌾 வேலை வாய்ப்புகள்
          </button>
        </div>

        <div style={{display:"flex", gap:"12px"}}>
          <button style={btn} onClick={()=>navigate("/help")}>📞 உதவி</button>
        </div>

      </div>
    </div>
  );
}

const btn ={
  flex:1,
  padding:"12px",
  borderRadius:"12px",
  border:"none",
  background:"#29cf3c",
  color:"#000",
  fontWeight:"bold",
  fontSize:"15px"
};
