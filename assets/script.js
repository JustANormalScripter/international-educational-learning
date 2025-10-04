// Persistent settings
document.addEventListener("DOMContentLoaded", () => {
  const dark = localStorage.getItem("darkMode") === "true";
  const largeFont = localStorage.getItem("largeFont") === "true";

  document.body.classList.toggle("dark", dark);
  if (largeFont) document.body.style.fontSize = "1.2em";

  const darkToggle = document.getElementById("darkToggle");
  const accessibilityFont = document.getElementById("accessibilityFont");

  if (darkToggle) darkToggle.checked = dark;
  if (accessibilityFont) accessibilityFont.checked = largeFont;

  darkToggle?.addEventListener("change", e => {
    localStorage.setItem("darkMode", e.target.checked);
    document.body.classList.toggle("dark", e.target.checked);
  });

  accessibilityFont?.addEventListener("change", e => {
    localStorage.setItem("largeFont", e.target.checked);
    document.body.style.fontSize = e.target.checked ? "1.2em" : "";
  });

  // Easter egg on home
  const imgs = document.querySelectorAll(".lang-img");
  let clickCount = 0;
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      clickCount++;
      if (clickCount >= 10) {
        document.getElementById("hiddenGames")?.style.setProperty("display", "block");
      }
    });
  });
});
