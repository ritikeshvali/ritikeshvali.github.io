export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const sysDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (sysDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <button className="theme-btn" onClick={toggle} aria-label="Toggle color theme">
      theme
    </button>
  );
}
