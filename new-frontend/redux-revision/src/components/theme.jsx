import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setTheme, resetTheme} from '../store/slices/themeSlice';

function theme() {
    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    return (
        <div>
        <h1>{theme}</h1>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        <button onClick={() => dispatch(setTheme('lights out'))}>Set Theme</button>
        <button onClick={() => dispatch(resetTheme())}>Reset Theme</button>
        </div>
    )
};

export default theme;