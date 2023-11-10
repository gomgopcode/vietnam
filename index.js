var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://raw.githubusercontent.com/gomgopcode/vietnam/main/vietnam.json');
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
  var data = JSON.parse(xhr.responseText);
    for(let p in data){
     var provinceName = data[p].Name,
         Districts = data[p].Districts;
         console.log(provinceName)
     for(let d in Districts){
       var districtName = Districts[d].Name,
           Wards = Districts[d].Wards;
      // console.log(districtName)
       for(let w in Wards){
         var wardName = Wards[w].Name;
      // console.log(wardName)
       }
       
     }  
     }

   }
}
xhr.send();
