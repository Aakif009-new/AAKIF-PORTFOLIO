export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME: Theme = "dark";

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) return stored;
  } catch {
    /* localStorage blocked */
  }
  return DEFAULT_THEME;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
}

export const THEME_CHANGE_EVENT = "portfolio-theme-change";

export const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark')t='${DEFAULT_THEME}';var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);r.style.colorScheme=t;r.dataset.theme=t;}catch(e){var r=document.documentElement;r.classList.add('${DEFAULT_THEME}');r.style.colorScheme='${DEFAULT_THEME}';r.dataset.theme='${DEFAULT_THEME}';}})();`;

export function notifyThemeChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }
}
