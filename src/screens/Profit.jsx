import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import BottomNav from "../components/BottomNav";

export default function Profit(){

  const { lang } = useLanguage();
  const t = lang === "ta";

  const [cost, setCost] = useState({
    seed: 0,
    fert: 0,
    labour: 0,
    water: 0,
    transport: 0,
  });

  const [sell, setSell] = useState(0);
  const [yieldKg, setYieldKg] = useState(0);

  const totalCost =
    Number(cost.seed) +
    Number(cost.fert) +
    Number(cost.labour) +
    Number(cost.water) +
    Number(cost.transport);

  const totalIncome = Number(sell) * Number(yieldKg);

  const profit = totalIncome - totalCost;

  return(
    <div style={styles.page}>
      <div style={styles.mobile}>

        <BottomNav />

        <h2>{t ? "லாபம் & செலவு கணக்குபடுத்தி" : "Profit & Cost Calculator"}</h2>

        <h3>{t ? "செலவு விவரம்" : "Cost Details"}</h3>

        <input style={styles.input} placeholder={t?"விதை செலவு":"Seed Cost"}
          onChange={e=>setCost({...cost, seed:e.target.value})} />

        <input style={styles.input} placeholder={t?"உரம் செலவு":"Fertilizer Cost"}
          onChange={e=>setCost({...cost, fert:e.target.value})} />

        <input style={styles.input} placeholder={t?"வேலைக்காரர் செலவு":"Labour Cost"}
          onChange={e=>setCost({...cost, labour:e.target.value})} />

        <input style={styles.input} placeholder={t?"நீர் / மின் செலவு":"Water / Electricity"}
          onChange={e=>setCost({...cost, water:e.target.value})} />

        <input style={styles.input} placeholder={t?"போக்குவரத்து செலவு":"Transport Cost"}
          onChange={e=>setCost({...cost, transport:e.target.value})} />


        <h3>{t ? "வருமான விவரம்" : "Income Details"}</h3>

        <input style={styles.input} placeholder={t?"விலை / கிலோ":"Selling Price / Kg"}
          onChange={e=>setSell(e.target.value)} />

        <input style={styles.input} placeholder={t?"மொத்த உற்பத்தி (கிலோ)":"Total Yield (Kg)"}
          onChange={e=>setYieldKg(e.target.value)} />


        <div style={styles.card}>
          <p>💸 {t?"மொத்த செலவு":"Total Cost"}: ₹{totalCost}</p>
          <p>📈 {t?"மொத்த வருமானம்":"Total Income"}: ₹{totalIncome}</p>
          <p>🧮 {t?"இறுதி லாபம்":"Final Profit"}:</p>

          <h2 style={{color: profit>=0?"green":"red"}}>
            ₹{profit}
          </h2>
        </div>

      </div>
    </div>
  );
}


const styles={

  page:{minheight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"rgba(226, 229, 232, 1)"},


  mobile:{width:"90%",maxWidth:420,background:"#259125ff",borderRadius:22,boxShadow:"0 18px 45px rgba(0,0,0,.18)",padding:15,margin:"0 10px"},

  input:{width:"90%",padding:10,marginBottom:8,borderRadius:10,border:"1px solid #ccc"},

  card:{background:"#f7fff7",borderRadius:16,padding:14,border:"1px solid #d8efd8"}
};
