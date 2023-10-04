let a;
let date;
let  time;
setInterval(() => {
    
     a =new Date();
     time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
     date=a.toLocaleDateString();
    document.getElementById('time').innerHTML=time+" on "+date;
}, 1000);
