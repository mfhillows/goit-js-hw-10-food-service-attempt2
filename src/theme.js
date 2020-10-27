const toolBar = document.querySelector("#theme-switch-toggle");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

toolBar.addEventListener("change", changeTheme);
function changeTheme() {
  if (toolBar.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem("saveTheme", Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem("saveTheme", Theme.LIGHT);
  }
}

function saveTheme() {
  const saveTheme = localStorage.getItem("saveTheme");
  if (saveTheme) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);

    document.body.classList.add(saveTheme);
  }
}
saveTheme();
localStorage.clear();
