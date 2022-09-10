setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    rot_h=htime*30+mtime/2+stime/120;
    rot_m=6*mtime+stime/10;
    rot_s=6*stime;
    hrs.style.transform=`rotate(${rot_h}deg)`;
    mins.style.transform=`rotate(${rot_m}deg)`;
    scs.style.transform=`rotate(${rot_s}deg)`;
    document.getElementById("digital").innerHTML=`Current Time =  ${(htime<10)?("0"+htime):(htime)} : ${(mtime<10)?("0"+mtime):(mtime)} : ${(stime<10)?("0"+stime):(stime)} ${(htime>12)?"pm":"am"}`;
},1);