// IDEA BOARD -
const ideaBox = document.getElementById('idea-text');
const ideaBtn = document.getElementById('edit-idea-btn');
const STORAGE_KEY = "ideaBoardText";

if (ideaBox) {
  const savedText = localStorage.getItem(STORAGE_KEY);
  if (savedText) {
    ideaBox.textContent = savedText;
  }
}

if (ideaBtn && ideaBox) {
  ideaBtn.addEventListener('click', () => {
    const isEditing = ideaBox.contentEditable === "true";
    ideaBox.contentEditable = isEditing ? "false" : "true";
    ideaBtn.textContent = isEditing ? "Edit" : "Save";

    if (!isEditing) {
      ideaBox.focus();
    } else {
      localStorage.setItem(STORAGE_KEY, ideaBox.textContent);
    }
  });
}

//  THEME TOGGLE 
const themeToggle = document.getElementById('theme-toggle');
const THEME_KEY = "theme";

// Load saved theme
if (localStorage.getItem(THEME_KEY) === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });
}
