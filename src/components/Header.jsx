import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Header({ title = "", back = true }) {

  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = lang === "ta";

  return (
    <div style={styles.container}>

      {back && (
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ←
        </button>
      )}

      <h3 style={{ margin: 0 }}>
        {title || (t ? "விவசாயி உதவியாளர்" : "Farmer Assistant")}
      </h3>

    </div>
  );
}

const styles = {

  container:{
    display:"flex",
    alignItems:"center",
    gap:10,
    padding:"10px 12px",
    background:"#2e8b57",
    color:"white",
    borderRadius:12,
    marginBottom:10
  },

  backBtn:{
    background:"white",
    border:"none",
    borderRadius:"50%",
    width:32,
    height:32,
    fontSize:16,
    cursor:"pointer"
  }
};
