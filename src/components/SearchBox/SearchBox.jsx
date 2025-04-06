import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();

  const filter = useSelector(state => state.filters.name); 
  return (
    <div className={css.filter}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={(event) => dispatch(changeFilter(event.target.value))}/> 
    </div>
  );
};
export default SearchBox;
////Обробник onChange реалізований для оновлення батьківського компоненту новим значенням пошуку.
