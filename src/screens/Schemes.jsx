import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

export default function Schemes(){

  const { lang } = useLanguage();
  const t = lang === "ta";

  const [open, setOpen] = useState(""); // which scheme is open

  return(
    <div style={styles.page}>
      <div style={styles.mobile}>

        <BottomNav />

        <h2>
          {t ? "அரசு திட்டங்கள் & காப்பீடு"
             : "Government Schemes & Insurance"}
        </h2>


        {/* ========== PM KISAN ========== */}
        <div style={styles.card}>

          <h3 onClick={()=>setOpen(open==="pm" ? "" : "pm")}
              style={styles.header}>
            🌾 PM-Kisan
          </h3>

          {open==="pm" && (
            <div>
              <p>{t ? "ஆண்டுக்கு ரூ.6000 உதவி"
                    : "₹6000 yearly income support"}</p>

              <h4>{t ? "தகுதி" : "Eligibility"}</h4>
              <ul>
                <li>{t ? "இந்திய விவசாயி" : "Indian farmer"}</li>
                <li>{t ? "நில உரிமை அவசியம்" : "Must own land"}</li>
                <li>{t ? "ஆதார் கட்டாயம்" : "Aadhaar required"}</li>
              </ul>

              <h4>{t ? "ஆவணங்கள்" : "Documents"}</h4>
              <ul>
                <li>{t ? "ஆதார் அட்டை" : "Aadhaar"}</li>
                <li>{t ? "பாஸ்புக்" : "Bank passbook"}</li>
                <li>{t ? "நில ஆவணம்" : "Land record"}</li>
              </ul>

              <h4>{t ? "கடைசி தேதி" : "Last Date"}</h4>
              <p>{t ? "எப்போதும் விண்ணப்பிக்கலாம்"
                    : "Apply anytime"}</p>

              <a href="https://pmkisan.gov.in"
                 target="_blank"
                 style={styles.link}>
                  pmkisan.gov.in
              </a>
            </div>
          )}
        </div>



        {/* ========== CROP INSURANCE ========== */}
        <div style={styles.card}>

          <h3 onClick={()=>setOpen(open==="ins" ? "" : "ins")}
              style={styles.header}>
            🛡 Crop Insurance
          </h3>

          {open==="ins" && (
            <div>
              <p>{t ? "பயிர் சேதத்திற்கு பாதுகாப்பு"
                    : "Protects crop loss"}</p>

              <h4>{t ? "தகுதி" : "Eligibility"}</h4>
              <ul>
                <li>{t ? "விவசாயி இருக்க வேண்டும்"
                       : "Must be a farmer"}</li>
              </ul>

              <h4>{t ? "ஆவணங்கள்" : "Documents"}</h4>
              <ul>
                <li>{t ? "ஆதார் அட்டை" : "Aadhaar"}</li>
                <li>{t ? "வங்கி விவரம்" : "Bank passbook"}</li>
              </ul>

              <h4>{t ? "கடைசி தேதி" : "Last Date"}</h4>
              <p>{t ? "பயிரிடும் காலத்திற்கு முன்"
                    : "Before crop season"}</p>

              <a href="https://pmfby.gov.in"
                 target="_blank"
                 style={styles.link}>
                  pmfby.gov.in
              </a>
            </div>
          )}
        </div>



        {/* ========== SUBSIDY ========== */}
        <div style={styles.card}>

          <h3 onClick={()=>setOpen(open==="sub" ? "" : "sub")}
              style={styles.header}>
            💰 Subsidy Schemes
          </h3>

          {open==="sub" && (
            <div>
              <p>{t ? "உபகரணங்கள் / பாசனம் ஆகியவற்றிற்கு உதவி"
                    : "Support for machinery & irrigation"}</p>

              <h4>{t ? "ஆவணங்கள்" : "Documents"}</h4>
              <ul>
                <li>{t ? "ஆதார்" : "Aadhaar"}</li>
                <li>{t ? "வங்கி விவரம்" : "Bank details"}</li>
              </ul>

              <a href="https://agricoop.nic.in"
                 target="_blank"
                 style={styles.link}>
                  agricoop.nic.in
              </a>
            </div>
          )}
        </div>



        {/* ========== LOAN SUPPORT ========== */}
        <div style={styles.card}>

          <h3 onClick={()=>setOpen(open==="loan" ? "" : "loan")}
              style={styles.header}>
            🏦 Loan Support
          </h3>

          {open==="loan" && (
            <div>
              <p>{t ? "விவசாயிகளுக்கு குறைந்த வட்டி கடன்"
                    : "Low-interest loans for farmers"}</p>

              <h4>{t ? "ஆவணங்கள்" : "Documents"}</h4>
              <ul>
                <li>{t ? "ஆதார்" : "Aadhaar"}</li>
                <li>{t ? "நில ஆவணம்" : "Land record"}</li>
              </ul>

              <a href="https://www.mygov.in"
                 target="_blank"
                 style={styles.link}>
                  mygov.in
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}



const styles={

  page:{
    minheight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#e5f6e5"
  },

  mobile:{
    width:"100%",
    maxWidth:420,
    background:"#259125ff",
    borderRadius:22,
    boxShadow:"0 18px 45px rgba(0,0,0,.18)",
    padding:18,
    margin:"0 10px"
  },

  card:{
    background:"#f7fff7",
    borderRadius:16,
    padding:14,
    marginBottom:10,
    border:"1px solid #d8efd8"
  },

  header:{
    margin:0,
    cursor:"pointer"
  },

  link:{
    color:"#0066cc",
    fontWeight:"bold",
    textDecoration:"none"
  }
};
