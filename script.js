const modal = document.getElementById("img.zoomable");
const modalImg = document.getElementById("img-modal.zoomable");
const closeBtn = document.getElementById("img.zoomable");

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

// Fermer en cliquant en dehors
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