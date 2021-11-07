import { useDispatch, useSelector } from "react-redux";
import { dishesActions } from "../app/dishes";
import classes from "./dishes.module.css";
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
const Dishes = () => {
  const dispatch = useDispatch();
  const typeOfDish = useSelector((state) => state.dishes.type_of_dish);
  const nameOfDish = useSelector((state) => state.dishes.name_of_dish);
  const preparationTime = useSelector((state) => state.dishes.preparation_time);
  const slicesOfBread = useSelector((state) => state.dishes.slices_of_bread);
  const spiccnesesOfDish = useSelector((state) => state.dishes.spiciness);
  const noOfSlice = useSelector((state) => state.dishes.no_of_slice);
  const diameter = useSelector((state) => state.dishes.diameter);
  const id = useSelector((state) => state.dishes.id);
  const onChangeDish = (e) => {
    dispatch(dishesActions.onChangeTypeOfDish(e.target.value));
  };
  const onChangeNameOfDish = (e) => {
    dispatch(dishesActions.onChangeNameOfDish(e.target.value));
  };
  const onChangePreparationTime = (e) => {
    dispatch(dishesActions.onChangePrepartionTime(e.target.value));
  };
  const sendData = async (body) => {
    await fetch("https://rough-water-7478.getsandbox.com/dishes", {
      method: "POST",
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Success: " + data.status);
      })
      .catch((error) => {
        alert("Something went wrong: " + error)
      });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(dishesActions.onChangeId());
    if (typeOfDish === "pizza") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparationTime: preparationTime,
        noOfSlice: +noOfSlice,
        diameter: +diameter,
        id: id,
      }
      sendData(dish);
      console.log(dish);
    };
    if (typeOfDish === "soup") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparationTime: preparationTime,
        spiciness_scale: +spiccnesesOfDish,
        id: id,
      };
      sendData(dish);
      console.log(dish);
    }
    if (typeOfDish === "sandwich") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparationTime: preparationTime,
        slicesOfBread: +slicesOfBread,
        id: id,
      };
      sendData(dish);
      console.log(dish);
    }
  };
  return (
    <div className={classes.dishes}>
      <form className={classes.dishesForm} onSubmit={onSubmit}>
        <label htmlFor="name-of-dish">Name </label>
        <input
          type="text"
          id="name-of-dish"
          value={nameOfDish}
          onChange={onChangeNameOfDish}
        />

        <label htmlFor="preparation-time">Preparation Time </label>
        <input
          type="time"
          id="preparation-time"
          step="2"
          value={preparationTime}
          onChange={onChangePreparationTime}
        />

        <p>Choose type of dish</p>
        <select className={classes.select} onChange={onChangeDish}>
          <option defaultValue value="none">
            Select dish
          </option>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
        {typeOfDish === "pizza" && <Pizza />}
        {typeOfDish === "soup" && <Soup />}
        {typeOfDish === "sandwich" && <Sandwich />}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Dishes;
