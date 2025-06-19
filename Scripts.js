let image =document.getElementById("image-presentation");
image.addEventListener("mouseover", function(){
image.style.border ="2px solid";
});
image.addEventListener("mouseout", function(){
image.style.border ="none";
});

//Validation du formulaire

function validerFormulaire() {
  const form = document.forms.formulaire;

  if (form.nom.value === "") {
  alert("Veuillez entrer votre nom!");
  form.nom.focus();
 return false;
}

if (form.prenom.value === "") {
  alert("Veuillez entrer votre prenom!");
  form.prenom.focus();
 return false;
}

if (form.email.value === "") {
  alert("Veuillez entrer votre email valide!");
  form.email.focus();
 return false;
}

if (form.sujet.value === "") {
  alert("Veuillez entrer l'objet!");
  form.sujet.focus();
 return false;
}

if (form.message.value === "") {
  alert("Veuillez entrer votre message!");
  form.message.focus();
 return false;
}

alert("Formulaire validé avec succès!");
return true;
}