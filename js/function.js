const botonHobbies = document.getElementById('boton-hobbies');
const infoHobbies = document.querySelector('.info-hobbies');

botonHobbies.addEventListener('click', () => {
  infoHobbies.classList.toggle('show');
  if (botonHobbies.textContent === 'Conocer Hobbies') {
    botonHobbies.textContent = 'Esconder Hobbies';
  } else {
    botonHobbies.textContent = 'Conocer Hobbies';
  }
});

botonHobbies.addEventListener("click", function() {
  if (infoHobbies.style.display === "none") {
    infoHobbies.style.display = "block";
  } else {
    infoHobbies.style.display = "none";
  }
});
