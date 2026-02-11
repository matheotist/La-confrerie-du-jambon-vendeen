const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("img-modal-content");
const closeBtn = document.getElementById("img-close");

// Toutes les images zoomables
document.querySelectorAll("img.zoomable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Fermer avec bouton
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fermer en cliquant en dehors de l'image
modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
};

// Fermer avec ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    modal.style.display = "none";
  }
});