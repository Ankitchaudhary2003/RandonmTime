function timing(){
 const timer=document.getElementById('root');
const now=new Date();
const indianTime=now.toLocaleTimeString();
timer.innerHTML=indianTime
}
setInterval(timing,1000);
const timer=document.getElementById('root');
timer.style.fontSize="50px"
timer.style.display="flex"


