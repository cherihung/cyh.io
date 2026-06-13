(() => {
  const themes = ["monokai", "dark", "solarized", "bright"];
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("cyh_theme");
  const theme = themes.includes(savedTheme) ? savedTheme : "monokai";

  root.classList.add(theme);
})();
