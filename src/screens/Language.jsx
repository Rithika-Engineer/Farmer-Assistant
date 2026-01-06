import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Language(){

  const { lang, changeLang } = useLanguage();
  const navigate = useNavigate();

  function tamil(){
    changeLang("ta");
  }

  function english(){
    changeLang("en");
  }

 function goNext(){
  navigate("/profile");
}


  return(
    <div style={styles.page}>

      <div style={styles.box}>

        <h2>
          {lang==="ta" ? "மொழியை தேர்வு செய்க" : "Select Language"}
        </h2>

        <button style={styles.btn} onClick={tamil}>
          தமிழ்
        </button>

        <button style={styles.btn} onClick={english}>
          English
        </button>

        <p>
          {lang==="ta" ? "தேர்ந்தெடுத்த மொழி: தமிழ்" : "Selected: English"}
        </p>

        <button style={styles.next} onClick={goNext}>
          {lang==="ta" ? "தொடரவும்" : "Continue"}
        </button>

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

  box:{
    background:"white",
    padding:20,
    borderRadius:16,
    boxShadow:"0 10px 25px rgba(0,0,0,.15)",
    textAlign:"center",
    width:300
  },

  btn:{
    width:"100%",
    padding:10,
    marginBottom:10,
    borderRadius:10,
    border:"1px solid #ccc",
    fontSize:16
  },

  next:{
    width:"100%",
    padding:10,
    background:"#3fbf3f",
    color:"white",
    border:"none",
    borderRadius:10,
    fontWeight:"bold",
    marginTop:10
  }
};
