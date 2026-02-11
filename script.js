// Récupère la modal et ses éléments
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("img-modal-content");
const closeBtn = document.getElementById("img-close");

// Toutes les images avec la classe "zoomable"
document.querySelectorAll("img.zoomable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";   // Affiche la modal
    modalImg.src = img.src;          // Change l'image de la modal
  });
});

// Fermer la modal avec le bouton X
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fermer la modal en cliquant en dehors de l'image
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Fermer la modal avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});