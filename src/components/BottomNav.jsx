import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function BottomNav(){

  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();
  const t = lang === "ta";

  return(
    <div style={styles.bar}>

      <button 
        style={btn(location.pathname === "/home")}
        onClick={()=>navigate("/home")}
      >
        🏠 {t?"முகப்பு":"Home"}
      </button>

      <button 
        style={btn(location.pathname === "/weather")}
        onClick={()=>navigate("/weather")}
      >
        🌤 {t?"வானிலை":"Weather"}
      </button>

      <button 
        style={btn(location.pathname === "/natural")}
        onClick={()=>navigate("/natural")}
      >
        🌿 {t?"இயற்கை":"Natural"}
      </button>

      <button 
        style={btn(location.pathname === "/profile")}
        onClick={()=>navigate("/profile")}
      >
        👤 {t?"சுயவிவரம்":"Profile"}
      </button>

    </div>
  );
}

const styles={
bar:{
  position:"sticky",
  bottom:0,
  background:"#ffffff",
  borderTop:"1px solid #ddd",
  display:"flex",
  justifyContent:"space-around",
  padding:"10px 0",
  borderRadius:"14px",
  marginTop:10
}

};

function btn(active){
  return{
    border:"none",
    background:"transparent",
    fontSize:14,
    fontWeight: active ? "bold" : "normal",
    color: active ? "#2e8b57" : "#444"
  };
}
