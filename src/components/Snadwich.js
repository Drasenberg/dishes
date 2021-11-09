import { useDispatch, useSelector } from "react-redux";
import { dishesActions } from "../app/dishes";
import classes from "./dishes.module.css";

const Sandwich = () => {
  const dispatch = useDispatch();
  const slicesOfBread = useSelector((state) => state.dishes.slices_of_bread);
  const onChangeSlicesOfBread = (e) => {
    dispatch(dishesActions.onChangeSlicesOfBread(e.target.value));
  };
  return (
    <div className={classes.dishesForm}>
      <label htmlFor="slices_of_bread">Slices of bread</label>
      <input
        type="number"
        name="slices_of_bread"
        id="slices_of_bread"
        value={slicesOfBread}
        onChange={onChangeSlicesOfBread}
      />
    </div>
  );
};

export default Sandwich;
