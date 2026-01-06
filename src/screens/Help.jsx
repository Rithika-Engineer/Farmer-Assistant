import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Help() {

  const { lang } = useLanguage();
  const t = lang === "ta";

  return (
    <div style={styles.page}>

      {/* ⭐ FOR FARMERS WITHOUT SMARTPHONE ⭐ */}
      <div style={styles.infoBox}>
        <h3>
          {t
            ? "💚 ஸ்மார்ட்போன் இல்லாத விவசாயிகளும் உதவி பெறலாம்"
            : "💚 Farmers without smartphones can also get help"}
        </h3>

        <p style={styles.text}>
          {t
            ? "இந்த எண்ணை உங்கள் கைப்பேசியில் சேமித்து வையுங்கள்:"
            : "Save this number in your phone:"}
        </p>

        <h2>📞 1800-180-1551</h2>

        <p style={styles.text}>
          {t
            ? "இணையம் இல்லாமலும் எந்த கைப்பேசியில் இருந்தும் அழைக்கலாம்"
            : "You can call from any phone — even without internet"}
        </p>

        <a href="tel:18001801551" style={styles.callBtn}>
          {t ? "இப்போதே அழைக்கவும்" : "Call Now"}
        </a>
        <div style={styles.menuBox}>
          <p style={styles.text}>
            {t
              ? "அழைத்த பிறகு நீங்கள் தேர்வு செய்யலாம்:"
              : "After calling, you can choose:"}
          </p>

          <ul>
            <li>{t ? "1 — வானிலை தகவல்" : "1 — Weather Info"}</li>
            <li>{t ? "2 — இயற்கை வேளாண்மை ஆலோசனை" : "2 — Natural Farming Guide"}</li>
            <li>{t ? "3 — சந்தை விலை" : "3 — Market Prices"}</li>
            <li>{t ? "4 — அரசு திட்டங்கள்" : "4 — Government Schemes"}</li>
          </ul>
        </div>

      </div>



      {/* ⭐ OFFICIAL SUPPORT ⭐ */}
      <div style={styles.card}>
        <h3>{t ? "🎯 அரசு விவசாயி ஹெல்ப்லைன்" : "🎯 Farmer Government Helpline"}</h3>

        <p style={styles.text}>
          {t
            ? "விவசாய ஆலோசனை, பயிர் பிரச்சினைகள், திட்ட உதவி"
            : "Crop help, guidance & scheme support"}
        </p>

        <h2>📞 1800-180-1551</h2>

        <a href="tel:18001801551" style={styles.callBtnSmall}>
          {t ? "அழைக்கவும்" : "Call"}
        </a>
      </div>



      <div style={styles.card}>
        <h3>{t ? "🏛 மாவட்ட விவசாய அலுவலகம்" : "🏛 District Agriculture Office"}</h3>

        <p style={styles.text}>
          {t
            ? "உங்கள் பகுதியில் உள்ள அதிகாரிகளை தொடர்பு கொள்ளுங்கள்"
            : "Contact agriculture officers near you"}
        </p>

        <a href="tel:1967" style={styles.callBtnSmall}>
          📞 1967
        </a>
      </div>

    </div>
  );
}



const styles = {

  page:{
    padding:"16px",
    fontFamily:"Arial, sans-serif",
    background:"#259125ff",
    minHeight:"100vh"
  },

  infoBox:{
    background:"#ffffff",
    padding:"16px",
    borderRadius:"16px",
    marginBottom:"14px",
    boxShadow:"0 3px 10px rgba(0,0,0,.15)"
  },

  card:{
    background:"#ffffff",
    padding:"16px",
    borderRadius:"16px",
    marginBottom:"12px",
    boxShadow:"0 2px 8px rgba(0,0,0,.15)"
  },

  text:{
    opacity:.8,
    lineHeight:"22px"
  },

  callBtn:{
    display:"block",
    marginTop:"12px",
    textAlign:"center",
    background:"#259125ff",
    color:"white",
    padding:"12px",
    borderRadius:"12px",
    fontSize:"16px",
    textDecoration:"none",
    fontWeight:"bold"
  },

  callBtnSmall:{
    display:"inline-block",
    marginTop:"8px",
    background:"#259125ff",
    color:"white",
    padding:"8px 12px",
    borderRadius:"10px",
    textDecoration:"none",
    fontSize:"14px"
  }
};
