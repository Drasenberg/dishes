import { useDispatch, useSelector } from "react-redux";
import { dishesActions } from "../app/dishes";
import classes from './dishes.module.css';

const Pizza = () => {
  const dispatch = useDispatch();
  const noOfSlice = useSelector((state) => state.dishes.no_of_slice);
  const diameter = useSelector((state) => state.dishes.diameter);
  const onDiameterChange = (e) => {
    dispatch(dishesActions.onDiameterChange(e.target.value));
  };
  const onNoOfSliceChange = (e) => {
    dispatch(dishesActions.onChangeNoOfSlice(e.target.value));
  };
  return (
    <div className={classes.dishesForm}>
      <label htmlFor="no_of_slice">Number of Slice</label>
      <input
        type="number"
        name="no_of_slice"
        id="no_of_slice"
        value={noOfSlice}
        onChange={onNoOfSliceChange}
      />

      <label htmlFor="diameter">Diameter</label>
      <input
        type="number"
        step="0.1"
        name="diameter"
        id="diameter"
        value={diameter}
        onChange={onDiameterChange}
      />
    </div>
  );
};

export default Pizza;