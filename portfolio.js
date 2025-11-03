function handleForm(e){
  e.preventDefault();
  const nom= document.getElementById(nom).value.trim();
  const message= document.getElementById(message).value.trim();
  const phone="22605357952"; window.open("https//wa.me/${phone}?_blank");
}