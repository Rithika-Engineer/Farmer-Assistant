import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

export default function PestControl() {

  const { lang } = useLanguage();
  const t = lang === "ta";

  const [pest, setPest] = useState("");
  const [image, setImage] = useState(null);
  const [autoDetect, setAutoDetect] = useState("");


  // ---------------- DATA ----------------
  const data = {

    insects:{
      name: t ? "இலை தின்று சேதப்படுத்தும் பூச்சிகள்" : "Leaf Eating Insects",

      solution: t ? "வேம்பெண்ணெய் தெளிப்பு" : "Neem Oil Spray",

      prepare: t 
        ? ["5 மில்லி வேம்பெண்ணெய்",
           "1 லிட்டர் தண்ணீரில் கலக்கவும்",
           "சிறிது சோப்பு சேர்க்கவும்",
           "நன்றாக குலுக்கவும்"]
        : ["5ml neem oil",
           "Mix in 1 litre water",
           "Add few soap drops",
           "Shake well"],

      apply: t 
        ? "7–10 நாட்களுக்கு ஒருமுறை இலைகளில் தெளிக்கவும்"
        : "Spray on leaves every 7–10 days",

      timing: t
        ? ["காலை / மாலை நேரம் சிறந்தது",
           "மழைக்கு முன் தெளிக்க வேண்டாம்",
           "நிழல் நேரம் சிறந்தது"]
        : ["Best time: Morning / Evening",
           "Avoid spraying before rain",
           "Shaded time is better"],

      safety: t ? "கண்கள் & வாயில் செல்லாமல் கவனமாக இருக்கவும்"
                 : "Avoid contact with eyes & mouth",

      benefit: t 
        ? ["நச்சு இல்லை","மண்ணுக்கும் மனிதனுக்கும் பாதுகாப்பு"]
        : ["Non-toxic","Safe for soil & humans"]
    },


    worms:{
      name: t ? "வேர் பூச்சிகள்" : "Root Worms",

      solution: t ? "பூண்டு – மிளகாய் சாரம்" : "Garlic – Chilli Extract",

      prepare: t
        ? ["100g பூண்டு அரைக்கவும்",
           "50g மிளகாய் அரைக்கவும்",
           "1 லிட்டரில் ஊறவிடவும்",
           "24 மணி நேரம் வைக்கவும்"]
        : ["Grind 100g garlic",
           "Grind 50g chilli",
           "Soak in 1 litre water",
           "Keep 24 hrs"],

      apply: t ? "வேரின் அருகில் ஊற்றவும்"
               : "Apply near root area",

      timing: t
        ? ["காலை நேரம் சிறப்பு",
           "3–4 நாட்களுக்கு ஒருமுறை",
           "மழையில்லா நாள் சிறந்தது"]
        : ["Morning preferred",
           "Repeat every 3–4 days",
           "Avoid rainy time"],

      safety: t ? "கண்களில் படாமல் கவனம்"
                 : "Avoid eye contact",

      benefit: t ? ["வேர் பாதுகாப்பு","தாக்குதல் குறையும்"]
                 : ["Root protection","Reduces infestation"]
    },


    fungus:{
      name: t ? "பூஞ்சை நோய்" : "Fungal Disease",

      solution: t ? "மோர் தெளிப்பு" : "Buttermilk Spray",

      prepare: t
        ? ["1 லிட்டர் மோர்",
           "5 லிட்டர் தண்ணீர்",
           "48 மணி நேரம் ஊறவிடவும்"]
        : ["1 litre buttermilk",
           "5 litre water",
           "Ferment 48 hrs"],

      apply: t ? "பாதிக்கப்பட்ட இலைகளில் தெளிக்கவும்"
               : "Spray infected leaves",

      timing: t
        ? ["மாலை நேரம்",
           "மழைக்கு முன் தவிர்க்கவும்",
           "வாரம் ஒருமுறை"]
        : ["Evening recommended",
           "Avoid before rain",
           "Once weekly"],

      safety: t ? "அதிக அளவு பயன்படுத்த வேண்டாம்"
                 : "Do not overdose",

      benefit: t ? ["இலை ஆரோக்கியம் மேம்படும்"]
                 : ["Improves leaf health"]
    }

  };


  // ----------- IMAGE UPLOAD ------------
  function handleImage(e){
    const file = e.target.files[0];
    if(file){
      setImage(URL.createObjectURL(file));
    }
  }


  // ---------- SIMPLE SMART ANALYSIS -------
  function analyzeImage(){

    if(!image){
      alert(t ? "முதலில் படத்தை பதிவேற்றவும்" : "Upload a photo first");
      return;
    }

    if(image.includes("yellow"))
      setAutoDetect(t?"இலை மஞ்சள் — ஊட்டச்சத்து குறைபாடு இருக்கலாம்"
                     :"Yellow leaf — nutrient deficiency likely");

    else if(image.includes("hole"))
      setAutoDetect(t?"இலை துளை — பூச்சி தாக்குதல் இருக்கலாம்"
                     :"Leaf holes — insects likely");

    else if(image.includes("white"))
      setAutoDetect(t?"வெள்ளை தழும்பு — பூஞ்சை நோய் இருக்கலாம்"
                     :"White patches — fungal infection");

    else
      setAutoDetect(t?"துல்லியமாக கண்டறிய முடியவில்லை — பட்டியலில் இருந்து தேர்வு செய்க"
                     :"Cannot detect clearly — choose from list");
  }



  return(
    <div style={styles.page}>

      <div style={styles.mobile}>

        <BottomNav />


        <h2 style={{textAlign:"center"}}>
          {t ? "இயற்கை பூச்சி கட்டுப்பாடு" : "Natural Pest Control"}
        </h2>


        {/* ---------- UPLOAD --------- */}
        <div style={styles.card}>
          <h3>📸 {t?"இலை படத்தை பதிவேற்றவும்":"Upload Leaf Photo"}</h3>

          <input type="file" accept="image/*" onChange={handleImage} />

          {image && (
            <img src={image}
              style={{width:"100%",borderRadius:12,marginTop:10}} />
          )}

          <button
            onClick={analyzeImage}
            style={styles.button}>
            {t?"பிரச்சனை கண்டறி":"Analyze Problem"}
          </button>

          {autoDetect && (
            <div style={{marginTop:8,color:"#0a7f2e"}}>
              🔍 {autoDetect}
            </div>
          )}
        </div>



        {/* ------------ SELECT ----------- */}
        <select
          style={styles.input}
          value={pest}
          onChange={e=>setPest(e.target.value)}
        >
          <option value="">
            {t?"பிரச்சனையை தேர்வு செய்க":"Select Problem"}
          </option>

          <option value="insects">{t?"இலை பூச்சி":"Leaf Insects"}</option>
          <option value="worms">{t?"வேர் பூச்சி":"Root Pests"}</option>
          <option value="fungus">{t?"பூஞ்சை நோய்":"Fungal Disease"}</option>
        </select>



        {/* -------- DETAILS -------- */}
        {pest && (
          <div>

            <div style={styles.card}>
              <h3>🐛 {data[pest].name}</h3>
            </div>

            <div style={styles.card}>
              <h3>🌿 {t?"இயற்கை தீர்வு":"Natural Solution"}</h3>
              <p>{data[pest].solution}</p>
            </div>

            <div style={styles.card}>
              <h3>🧪 {t?"தயாரிப்பு முறை":"Preparation"}</h3>
              <ol>
                {data[pest].prepare.map((s,i)=>(<li key={i}>{s}</li>))}
              </ol>
            </div>

            <div style={styles.card}>
              <h3>📏 {t?"பயன்படுத்துவது எப்படி?":"How to Apply?"}</h3>
              <p>{data[pest].apply}</p>
            </div>

            <div style={styles.card}>
              <h3>⏰ {t?"எப்போது பயன்படுத்தலாம்?":"When to Use?"}</h3>
              <ul>{data[pest].timing.map((x,i)=>(<li key={i}>{x}</li>))}</ul>
            </div>

            <div style={styles.card}>
              <h3>🌱 {t?"பயன்கள்":"Benefits"}</h3>
              <ul>{data[pest].benefit.map((x,i)=>(<li key={i}>{x}</li>))}</ul>
            </div>

            <div style={styles.card}>
              <h3>⚠ {t?"பாதுகாப்பு அறிவுரை":"Safety Advice"}</h3>
              <p>{data[pest].safety}</p>
            </div>

          </div>
        )}

        {!pest && (
          <p style={{opacity:.6}}>
            {t?"மேல் பட்டியலில் இருந்து தேர்வு செய்க"
               :"Please choose from above list"}
          </p>
        )}

      </div>
    </div>
  );
}




// ------------ STYLES --------------
const styles={

  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#e5f6e5"
  },

  mobile:{
    width:"100%",
    maxWidth:420,
    background:"#259125ff",
    borderRadius:20,
    padding:16,
    boxShadow:"0 18px 40px rgba(0,0,0,.18)",
    margin:"10px"
  },

  input:{
    width:"100%",
    padding:10,
    borderRadius:12,
    border:"1px solid #ccc",
    marginBottom:12
  },

  card:{
    background:"#f7fff7",
    borderRadius:16,
    padding:14,
    marginBottom:12,
    border:"1px solid #d8efd8"
  },

  button:{
    marginTop:10,
    padding:10,
    borderRadius:10,
    background:"#2e8b3d",
    color:"white",
    border:"none",
    cursor:"pointer"
  }
};
