import { useDispatch, useSelector } from "react-redux";
import classes from "./dishes.module.css";
import { dishesActions } from "../app/dishes";

const Soup = () => {
  const dispatch = useDispatch();
  const spiccnesesOfDish = useSelector((state) => state.dishes.spiciness);
  const onChangeSpicnnes = (e) => {
    dispatch(dishesActions.onChangeSpicinnes(e.target.value));
  };
  return (
    <div className={classes.dishesForm}>
      <label htmlFor="spiciness_scale">Spiciness</label>
      <input
        type="range"
        value={spiccnesesOfDish}
        min="1"
        max="10"
        name="spiciness_scale"
        id="spiciness_scale"
        onChange={onChangeSpicnnes}
      />
      {spiccnesesOfDish}
    </div>
  );
};

export default Soup;
