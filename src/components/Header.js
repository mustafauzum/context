import {useTheme} from "../context/ThemeContext";

function Header() {
  const {theme, setTheme} = useTheme()
  return (
  <>
    <div>Active Theme: {theme}</div>
    <br />
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
  </>
  )
}

export default Header
