import { useLanguage } from "../LanguageContext";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function SmartWeather(){

  const { lang } = useLanguage();
  const t = lang === "ta";

  return(
    <div style={{padding:12}}>

      <Header title={t ? "ஸ்மார்ட் வானிலை அறிவுரை" : "Smart Weather Advice"} />

      <div style={styles.card}>
        <h3>{t ? "💧 இன்று பாசனம் தேவையில்லை" : "💧 No Irrigation Needed Today"}</h3>
        <p>
          {t 
           ? "இன்று மழை வாய்ப்பு இருப்பதால் பாசனம் செய்ய வேண்டாம்."
           : "Rain probability is high today. Avoid irrigation."}
        </p>
      </div>

      <div style={styles.card}>
        <h3>{t ? "🧴 தெளிப்பு தவிர்க்கவும்" : "🧴 Avoid Spraying Today"}</h3>
        <p>
          {t 
           ? "காற்று வேகம் அதிகம். பூச்சி மருந்து தெளிப்பதை ஒத்திவைக்கவும்."
           : "Wind speed is high. Postpone pesticide spraying."}
        </p>
      </div>

      <div style={styles.card}>
        <h3>{t ? "🌾 அறுவடை கவனமாக" : "🌾 Harvest Carefully"}</h3>
        <p>
          {t 
           ? "அடுத்த 2 நாட்கள் மழை இருக்கலாம். பயிரை பாதுகாக்கவும்."
           : "Rain expected next 2 days. Protect harvested crops."}
        </p>
      </div>

      <div style={styles.cardYellow}>
        <h3>{t ? "⚠ எச்சரிக்கை" : "⚠ Warning"}</h3>
        <p>
          {t 
           ? "வெப்ப அலை. அதிக வெப்பத்தில் வேலையை குறைக்கவும்."
           : "Heat alert. Avoid working under strong sunlight."}
        </p>
      </div>

      <BottomNav />
    </div>
  );
}

const styles = {

  card:{
    background:"#e9fff0",
    padding:14,
    borderRadius:14,
    marginBottom:12
  },

  cardYellow:{
    background:"#fff3cd",
    padding:14,
    borderRadius:14,
    marginBottom:12
  }
};
