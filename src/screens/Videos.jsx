import BottomNav from "../components/BottomNav";
import { useLanguage } from "../LanguageContext";

export default function Videos() {

  const { lang } = useLanguage();
  const t = lang === "ta";

  const list = [
    {
      title: t ? "இயற்கை விவசாயம் அறிமுகம்" : "Intro to Natural Farming",
      link: "https://www.youtube.com/embed/G0B-m7vV4fA"

    },
    {
      title: t ? "உரம் தயாரிப்பு" : "Organic Fertilizer Guide",
      link: "https://www.youtube.com/embed/q6ioP1L1QZI"

    },
    {
  title: t ? "நீர் சேமிப்பு முறைகள்" : "Water Saving Methods",
  link: "https://www.youtube.com/embed/VI5jz7wKZ2o"
}

  ];

  return (
    <div style={styles.page}>

      <div style={styles.mobile}>

        <BottomNav />

        <div style={styles.header}>
          {t ? "கற்றல் வீடியோக்கள்" : "Learning Videos"}
        </div>

        <div style={styles.scrollArea}>
          {list.map((v, i) => (
            <div key={i} style={styles.card}>

              <div style={styles.title}>{v.title}</div>

              <iframe
                src={v.link}
                style={styles.video}
                allowFullScreen
              ></iframe>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


const styles = {

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

  header:{
    background:"linear-gradient(#6fdc6f,#3fbf3f)",
    color:"white",
    padding:12,
    borderRadius:14,
    textAlign:"center",
    fontWeight:"bold",
    marginBottom:10
  },

  scrollArea:{
    overflowY:"auto",
    paddingRight:6
  },

  card:{
    background:"#f4fff4",
    borderRadius:14,
    padding:10,
    border:"1px solid #d6efd8",
    marginBottom:12
  },

  title:{
    fontWeight:"bold",
    marginBottom:8
  },

  video:{
    width:"100%",
    height:"180px",
    border:"none",
    borderRadius:10
  }
};
