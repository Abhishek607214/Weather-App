import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info,darkMode}) {
    const INIT_URL = "https://images.unsplash.com/photo-1532939198640-a7f0da02b62f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1601116780129-5cb373831c75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   return (
   <div className="InfoBox">
    <Card
    sx={{
    maxWidth: 520,
    margin: "0 auto",
    borderRadius: "25px",
    overflow: "hidden",
    backdropFilter: "blur(20px)",
    background: darkMode
      ? "rgba(30,30,30,0.75)"
      : "rgba(255,255,255,0.75)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    transition: "0.4s",

    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.35)"
     }
    }}
>
      <CardMedia
        sx={{ height: 240 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
      <Typography
       gutterBottom
       variant="h4"
       sx={{
        fontWeight: "bold",
        textAlign: "center",
     }}
>
        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography component="span" variant="body2" sx={{ color:darkMode ? "#ddd" : "text.secondary" }}>
            <p>Temperatue = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels Like {" "} {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
   </div>
   );
}