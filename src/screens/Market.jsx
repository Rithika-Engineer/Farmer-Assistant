import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

export default function Market(){

  const { lang } = useLanguage();
  const t = lang === "ta";

  const [crop, setCrop] = useState("");
  const [market, setMarket] = useState("");

  const prices = {
    paddy:{
      chennai:{min:18, max:26},
      madurai:{min:17, max:25},
      trichy:{min:19, max:27}
    },
    banana:{
      chennai:{min:12, max:18},
      madurai:{min:10, max:16},
      trichy:{min:11, max:17}
    },
    groundnut:{
      chennai:{min:50, max:72},
      madurai:{min:48, max:70},
      trichy:{min:52, max:75}
    }
  };

  let selected = null;

  if(crop && market){
    selected = prices[crop][market];
  }

  return(
    <div style={styles.page}>

      <div style={styles.mobile}>

        <BottomNav />

        <h2>
          {t ? "இன்றைய சந்தை விலை" : "Today Market Price"}
        </h2>

        {/* Select crop */}
        <select style={styles.input}
          value={crop}
          onChange={e=>setCrop(e.target.value)}>

          <option value="">
            {t ? "பயிரை தேர்வு செய்க" : "Select Crop"}
          </option>

          <option value="paddy">{t?"நெல்":"Paddy"}</option>
          <option value="banana">{t?"வாழை":"Banana"}</option>
          <option value="groundnut">{t?"வேர்க்கடலை":"Groundnut"}</option>
        </select>


        {/* Select Market */}
        <select style={styles.input}
          value={market}
          onChange={e=>setMarket(e.target.value)}>

          <option value="">
            {t ? "சந்தையை தேர்வு செய்க" : "Select Market"}
          </option>

          <option value="chennai">{t?"சென்னை":"Chennai"}</option>
          <option value="madurai">{t?"மதுரை":"Madurai"}</option>
          <option value="trichy">{t?"திருச்சி":"Trichy"}</option>

        </select>


        {/* Show result */}
        {selected && (
          <div style={styles.card}>

            <h3>
              {t ? "விலை விவரம் / கிலோ"
                 : "Price per Kg"}
            </h3>

            <p>🟡 {t?"குறைந்தது":"Minimum"}: ₹{selected.min}</p>
            <p>🟢 {t?"அதிகபட்சம்":"Maximum"}: ₹{selected.max}</p>

            <h2 style={{color:"green"}}>
              {t?"சிறந்த விலை":"Best Price"}: ₹{selected.max}
            </h2>

          </div>
        )}

        {!selected && (
          <p style={{opacity:.6}}>
            {t
              ? "பயிர் & சந்தையை தேர்வு செய்க"
              : "Please select crop & market"}
          </p>
        )}

      </div>

    </div>
  );
}



const styles={

  page:{
    height:"100vh",
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
    border:"1px solid #d8efd8"
  }
};
