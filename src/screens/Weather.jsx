import Header from "../components/Header";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

import { useState, useEffect } from "react";






export default function Weather() {

  const { lang } = useLanguage();
  const t = lang === "ta";
  const [farmer, setFarmer] = useState({});
 

useEffect(()=>{
  const saved = JSON.parse(localStorage.getItem("farmer"));
  if(saved){
    setFarmer(saved);
  }
  

},[]);


  return (
    <div style={styles.page}>
 
      <div style={styles.mobile}>
      <Header title={t ? "வானிலை" : "Weather"} />
     


        <BottomNav />


        {/* APP BAR */}
        <div style={styles.topbar}>
          <span style={styles.appTitle}>
          <Header title={t ? "விவசாயி உதவியாளர்" : "Farmer Assistant"} back={false} />
            {t ? "விவசாய உதவி" : "Farmer Assistant"}
          </span>
        </div>
        

        {/* HEADER */}
        <div style={styles.hero}>
          <div style={styles.heroIcon}>🌤</div>

          <div style={styles.heroTemp}>29°C</div>

          <div style={styles.heroText}>
            {t ? "மிதமான மேகம்" : "Partly Cloudy"}
          </div>

          <div style={styles.heroLocation}>📍 Thanjavur</div>
        </div>

        {/* DATA CARDS */}
        <div style={styles.cards}>

          <Card title={t ? "மழை வாய்ப்பு" : "Rain Chance"} value="60%" icon="🌧" />
          <Card title={t ? "காற்று வேகம்" : "Wind" } value="12 km/hr" icon="🌬" />
          <Card title={t ? "ஈரப்பதம்" : "Humidity"} value="72%" icon="💧" />
          <Card title={t ? "வெப்ப நிலை உணர்வு" : "Feels Like"} value="31°C" icon="🌡" />

        </div>

       <div style={styles.card}>
        <h3>{t?"விவசாய அறிவுரை":"Farming Advice"}</h3>

        <ul>
          <li>{t?"மழை இருக்கும் — பூச்சி மருந்து தெளிக்க வேண்டாம்":"Rain expected — avoid spraying chemicals"}</li>
          <li>{t?"நீர்ப்பாய்ச்சி தள்ளிவை":"Delay irrigation"}</li>
          <li>{t?"அறுவடை கவனமாக செய்யவும்":"Plan harvest carefully"}</li>
        </ul>
      </div>


        {/* ADVICE BOX */}
        <div style={styles.tip}>
          {t
            ? "🌱 இன்று தெளிப்பு செய்ய வேண்டாம் — மழை வாய்ப்பு உள்ளது"
            : "🌱 Avoid spraying today — rain expected"}
        </div>

        {/* WEEK FORECAST */}
        <div style={styles.section}>
          {t ? "அடுத்த நாட்கள்" : "Upcoming Days"}
        </div>

        <div style={styles.week}>
          <DayBox day="Mon" icon="⛅" temp="29°C" />
          <DayBox day="Tue" icon="🌧" temp="26°C" />
          <DayBox day="Wed" icon="☀" temp="31°C" />
        </div>

      </div>
    </div>
  );
}


function Card({ title, value, icon }) {
  return (
    <div style={styles.cardBox}>
      <div style={styles.cardIcon}>{icon}</div>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardValue}>{value}</div>
    </div>
  );
}

function DayBox({ day, icon, temp }) {
  return (
    <div style={styles.dayBox}>
      <div>{day}</div>
      <div style={{ fontSize: 26 }}>{icon}</div>
      <div>{temp}
      </div>
      

    </div>
  );
}


const styles = {

 page:{
  minHeight:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"flex-start",
  paddingTop:"10px",
  background:"white"
},


  mobile:{
  width:"90%",
  maxWidth:420,
  background:"#259125ff",
  borderRadius:22,
  boxShadow:"0 18px 45px rgba(0,0,0,.18)",
  padding:"12px",
  margin:"0 auto"
},
   container:{
    maxWidth:"420px",   // 📱 mobile width
    margin:"0 auto",    // ⭐ center screen
    padding:"12px",
    minHeight:"100vh",
    background:"#eaf3ff"
  },
  topbar:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16,
    padding:8,
    borderRadius:12,
    background:"#f4fff3",
    marginBottom:10
  },

  appTitle:{
    color:"#2f7d32"
  },

  hero:{
    background:"linear-gradient(#6fdc6f,#3fbf3f)",
    color:"white",
    borderRadius:20,
    textAlign:"center",
    padding:22,
    marginBottom:12
  },

  heroIcon:{ fontSize:44 },
  heroTemp:{ fontSize:36, fontWeight:"bold" },
  heroText:{ marginTop:5 },
  heroLocation:{ opacity:.9, marginTop:4 },

  cards:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:10,
    marginBottom:12
  },

  cardBox:{
    background:"#f3faf3",
    borderRadius:16,
    padding:14,
    textAlign:"center",
    border:"1px solid #dbe6dbff"
  },

  cardIcon:{ fontSize:22 },
  cardTitle:{ fontSize:12, color:"#555" },
  cardValue:{ fontWeight:"bold", fontSize:16 },

  tip:{
    background:"#fff4a3",
    padding:12,
    borderRadius:14,
    marginBottom:10
  },

  section:{
    marginBottom:6,
    fontWeight:"bold"
  },

  week:{
    display:"flex",
    gap:10
  },

  dayBox:{
    flex:1,
    background:"#e1e4d2ff",
    borderRadius:14,
    textAlign:"center",
    padding:10,
    border:"1px solid #d8efd8"
  },

};
