import AppRoutes from "./routes/AppRoutes";


export default function App() {

  return (
    <div style={styles.page}>
      <div style={styles.mobile}>
        <AppRoutes />
      </div>
    </div>
  );
}

const styles = {
  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    backgroundSize:"cover",
    backgroundPosition:"center"
  },

  mobile:{
    width:"100%",
    maxWidth:420,
    background:"rgba(255,255,255,.92)",
    borderRadius:20,
    padding:18,
    boxShadow:"0 12px 38px rgba(0,0,0,.25)"
  },
  screen:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#e8ffe8"
  },

  mobileBox:{
    width:"100%",
    maxWidth:"400px",     // 📱 FIXED MOBILE WIDTH
    height:"90vh",        // 📏 FIXED MOBILE HEIGHT
    background:"white",
    borderRadius:"20px",
    padding:"10px",

    overflowY:"auto",     // 🟢 MAKE CONTENT SCROLL
    boxShadow:"0 20px 45px rgba(0,0,0,.25)"
  }
};
