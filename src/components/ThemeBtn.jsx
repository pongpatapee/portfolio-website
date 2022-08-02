import useDarkMode from "../hooks/useDarkTheme";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeBtn = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <button onClick={handleMode} className="cursor-pointer">
            {darkTheme ? <BsFillSunFill size={24} /> : <BsFillMoonFill size={22} />}
        </button>
    );
}
 
export default ThemeBtn;