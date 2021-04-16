function gettime(seconds) {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60) % 60;
    const hr = Math.floor(seconds / (60 * 60));
    return `${hr > 9 ? hr : "0" + hr} : ${min > 9 ? min : "0" + min} :${
      sec > 9 ? sec : "0" + sec
    }`;
  }
   export {gettime}

export const d = new Date();

var weekday = new Array(7);
weekday[0] = "Su";
weekday[1] = "M";
weekday[2] = "T";
weekday[3] = "W";
weekday[4] = "Th";
weekday[5] = "F";
weekday[6] = "S";

export let n = weekday[d.getDay()];
let week={}
export const Day=(title)=>{
    if(n==="M"){
      week={
          M:0,
          T:1,
          W:2,
          Th:3,
          F:4,
          S:5,
          Su:6,
      }
      for(let key in week){
         if(key===title){
 
             return week[key]
         }
      }
     }
     if(n==="T"){
        week={
            M:-1,
            T:0,
            W:1,
            Th:2,
            F:3,
            S:4,
            Su:5,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
       if(n==="W"){
        week={
            M:-2,
            T:-1,
            W:0,
            Th:1,
            F:2,
            S:3,
            Su:4,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
       if(n==="Th"){
        week={
            M:-3,
            T:-2,
            W:-1,
            Th:0,
            F:1,
            S:2,
            Su:3,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
       if(n==="F"){
        week={
            M:-4,
            T:-3,
            W:-2,
            Th:-1,
            F:0,
            S:1,
            Su:2,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
       if(n==="S"){
        week={
            M:-5,
            T:-4,
            W:-3,
            Th:-2,
            F:-1,
            S:0,
            Su:3,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
       if(n==="Su"){
        week={
            M:-6,
            T:-5,
            W:-4,
            Th:-3,
            F:-2,
            S:-1,
            Su:0,
        }
        for(let key in week){
           if(key===title){
   
               return week[key]
           }
        }
       }
     
 }