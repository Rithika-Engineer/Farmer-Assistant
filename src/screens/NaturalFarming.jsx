import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

export default function NaturalFarming(){

  const { lang } = useLanguage();
  const t = lang === "ta";

  const [crop, setCrop] = useState("");


  const data = {

    paddy:{
      fert: t ? "ஜீவாமிருதம் 5 லிட்டர் / ஏக்கர்" : "Jeevamrutham 5L / acre",

      prep: t 
        ? [
          "1 லிட்டர் மாட்டு சாண நீர்",
          "1 லிட்டர் மாட்டு சிறுநீர்",
          "1 கிலோ கருப்பட்டி",
          "ஒரு கைபிடி மண்",
          "20 லிட்டர் தண்ணீரில் கலக்கவும்",
          "24 மணி நேரம் ஊறவிடவும்"
        ]
        : [
          "1L cow dung slurry",
          "1L cow urine",
          "1kg jaggery",
          "A handful of soil",
          "Mix in 20L water",
          "Ferment 24 hours"
        ],

      apply: t 
        ? "15 நாட்களுக்கு ஒருமுறை வேர்ப்பகுதியில் ஊற்றவும்"
        : "Apply near roots every 15 days",

      safety: t
        ? "கையுறை அணியவும்"
        : "Wear gloves",

      benefit: t
        ? [
          "மண் உயிர்சத்து அதிகரிக்கும்",
          "நீர் பிடிப்புத் திறன் உயரும்",
          "செலவு குறையும்",
          "நிலம் நீண்டகாலம் பயிரிட ஏற்றது"
        ]
        : [
          "Improves soil microbes",
          "Increases water holding capacity",
          "Reduces cost",
          "Improves long-term soil health"
        ]
    },


    banana:{
      fert: t ? "பஞ்சகவ்யம் 3 லிட்டர் / ஏக்கர்"
              : "Panchagavya 3L / acre",

      prep: t 
        ? [
          "2 லிட்டர் தயிர்",
          "2 லிட்டர் பால்",
          "1 லிட்டர் நெய்",
          "3 லிட்டர் மாட்டு சிறுநீர்",
          "5 லிட்டர் மாட்டு சாண நீர்",
          "7 நாட்கள் ஊறவிடவும்"
        ]
        : [
          "2L curd",
          "2L milk",
          "1L ghee",
          "3L cow urine",
          "5L cow dung slurry",
          "Ferment 7 days"
        ],

      apply: t 
        ? "20 நாட்களுக்கு ஒருமுறை பயன்படுத்தவும்"
        : "Apply every 20 days",

      safety: t
        ? "நிழலில் சேமிக்கவும்"
        : "Store in shade",

      benefit: t
        ? [
          "வளர்ச்சி வேகம் அதிகரிக்கும்",
          "கொத்து வலிமை உயரும்",
          "பழத்தின் தரம் உயரும்",
          "உற்பத்தி நிலையானது"
        ]
        : [
          "Boosts growth",
          "Stronger bunches",
          "Better fruit quality",
          "Stable yield"
        ]
    },


    groundnut:{
      fert: t ? "வெர்மிகம்போஸ்ட் 1 டன் / ஏக்கர்"
              : "Vermicompost 1 ton / acre",

      prep: t
        ? [
          "பசுமை கழிவு சேகரிக்கவும்",
          "வண்டு உரம் குழியில் வைக்கவும்",
          "ஈரப்பதம் பராமரிக்கவும்"
        ]
        : [
          "Collect organic waste",
          "Place in vermi pit",
          "Keep moist"
        ],

      apply: t
        ? "விதைப்பு முன் மண்ணில் கலக்கவும்"
        : "Mix before sowing",

      safety: t
        ? "பூச்சியிலிருந்து பாதுகாக்க மூடி வைக்கவும்"
        : "Cover pit from pests",

      benefit: t
        ? [
          "மண் வளம் உயரும்",
          "வேர் வளர்ச்சி நன்றாகும்",
          "நீர்ப்பிடிப்புத் திறன் உயரும்",
          "நீண்டகால மண் ஆரோக்கியம்"
        ]
        : [
          "Increases soil fertility",
          "Improves root development",
          "Better water retention",
          "Long-term soil health"
        ]
    }

  };


  return(
    <div style={styles.page}>

      <div style={styles.mobile}>

        <BottomNav />

        <h2>
          {t ? "இயற்கை வேளாண்மை ஆலோசனை"
             : "Natural Farming Advisor"}
        </h2>


        <select
          style={styles.input}
          value={crop}
          onChange={e=>setCrop(e.target.value)}
        >
          <option value="">
            {t ? "பயிரை தேர்வு செய்க" : "Select Crop"}
          </option>

          <option value="paddy">{t?"நெல்":"Paddy"}</option>
          <option value="banana">{t?"வாழை":"Banana"}</option>
          <option value="groundnut">{t?"வேர்க்கடலை":"Groundnut"}</option>
        </select>


        {crop && (
          <div>

            {/* Organic fertilizer */}
            <div style={styles.card}>
              <h3>🌿 {t?"இயற்கை உரம்":"Organic Fertilizer"}</h3>
              <p>{data[crop].fert}</p>
            </div>

            {/* Preparation */}
            <div style={styles.card}>
              <h3>🧪 {t?"எப்படி தயாரிப்பது?":"How to Prepare"}</h3>
              <ol>
                {data[crop].prep.map((s,i)=>(
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>

            {/* Apply */}
            <div style={styles.card}>
              <h3>📏 {t?"எப்படி பயன்படுத்துவது?":"How to Apply"}</h3>
              <p>{data[crop].apply}</p>
            </div>

            {/* Benefits */}
            <div style={styles.card}>
              <h3>🌱 {t?"பயன் என்ன?":"Benefits After Use"}</h3>
              <ul>
                {data[crop].benefit.map((b,i)=>(
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Safety */}
            <div style={styles.card}>
              <h3>⚠ {t?"பாதுகாப்பு அறிவுரை":"Safety Advice"}</h3>
              <p>{data[crop].safety}</p>
            </div>

            {/* COMPARISON */}
            <div style={styles.card}>
              <h3>⚖ {t?"ஒப்பீடு":"Natural vs Chemical"}</h3>

              <table style={{width:"100%", textAlign:"left"}}>
                <thead>
                  <tr>
                    <th>{t?"இயற்கை உரம்":"Natural Fertilizer"}</th>
                    <th>{t?"ரசாயன உரம்":"Chemical Fertilizer"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{t?"மண் வளம் உயரும்":"Improves soil health"}</td>
                    <td>{t?"மண் குணம் குறையும்":"Damages soil quality"}</td>
                  </tr>

                  <tr>
                    <td>{t?"செலவு குறைவு":"Low cost"}</td>
                    <td>{t?"செலவு அதிகம்":"High cost"}</td>
                  </tr>

                  <tr>
                    <td>{t?"நீண்டகால நன்மை":"Long-term benefit"}</td>
                    <td>{t?"குறுகியகால நன்மை":"Short-term only"}</td>
                  </tr>

                  <tr>
                    <td>{t?"ஆரோக்கியமான பயிர்":"Healthy crops"}</td>
                    <td>{t?"ரசாயன மீதிப்பாகம்":"Chemical residue risk"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

        {!crop && (
          <p style={{opacity:.6}}>
            {t?"பயிரை தேர்வு செய்க":"Please select crop"}
          </p>
        )}

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

  input:{
    width:"100%",
    padding:10,
    borderRadius:12,
    border:"1px solid #ccc",
    marginBottom:10
  },

  card:{
    background:"#f7fff7",
    borderRadius:16,
    padding:14,
    marginBottom:10,
    border:"1px solid #d8efd8"
  }
};
