const Specials =["Carne Asada","Carne Tampiquena","Los Altos Parillada", "Molcajete el Tendero"]

function goToNewPage() {
    var url = document.getElementById("list").value;
    if (url != "none") {
      console.log(url);
      window.location = url;
    }
  }
  function home() {
    window.location = "index.html";
    //console.log(Date.now);
  }

  // esta funcion consigue la fecha y aasigna un platillo en la lista de especiales
  //como el platillo del dia, para propocitos promocionales.
  function getSpecial(){
    console.log("getting specials");
    let date = new Date();
    console.log(date.getDate());
    
    let n = date.getDate() % Specials.length;
    document.getElementById("Special_Name").innerHTML = Specials[n];
    console.log("recieved specials");
  }