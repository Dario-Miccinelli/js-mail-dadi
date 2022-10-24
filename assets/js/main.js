// MAIL ARRAY PART



  const mailList = ["nasa@gmail.com", "boolando@outlook.com", "mucca@yahoo.it"];
  const userMail = document.getElementById("inputMail")
  const output = document.querySelector('h2');
  const verfyButton = document.getElementById('button');


  verfyButton.addEventListener('click', function(){
    console.log(userMail.value);
    //scorro nell'array per verificare che sia presente l'email inserita
    let NasaGuest = false;
    output.innerHTML = "";
    for (let i = 0; i < mailList.length; i++) {
      if(userMail.value === mailList[i]){
        NasaGuest = true;
      }
    }
    //se presente messaggio positivo
    //se non presente messaggio negativo
    if(NasaGuest){
      output.innerHTML = `Welcome! Ur data are stored in NASA database`;
      userMail.value = "";
    }else{
      output.innerHTML = `Sorry, you are not in NASA database.`;
      userMail.value = "";
    }
  });

// MAIL ARRAY ENDS

// DICE GAME

