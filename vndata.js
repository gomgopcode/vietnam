var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://raw.githubusercontent.com/gomgopcode/vietnam/main/vietnam.json');
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
  var VNdata = JSON.parse(xhr.responseText);

   }
}
xhr.send();
