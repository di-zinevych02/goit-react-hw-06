import css from "./SearchBox.module.css";
import { useDispatch } from 'react-redux';
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();

    const handleInput = (event) => {
        dispatch(changeFilter(event.target.value));
    }

  return (
    <div className={css.filter}>
      <span className={css.findcontact}>Find contacts by name</span>
      <input className={css.inputcontact} type="text" onChange={handleInput}/> 
    </div>
  );
};
export default SearchBox;
////Обробник onChange реалізований для оновлення батьківського компоненту новим значенням пошуку.
