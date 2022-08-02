import useDarkMode from "../hooks/useDarkTheme";

const ThemeBtn = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    
    return (
        <button onClick={handleMode} className="cursor-pointer">
            {darkTheme ? 'sun-icon' : 'moon-icon'}
        </button>
    );
}
 
export default ThemeBtn;