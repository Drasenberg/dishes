import { useDispatch, useSelector } from "react-redux";
import { dishesActions } from "../app/dishes";
import classes from "./dishes.module.css";
import Pizza from "./Pizza";
import Soup from "./Soup";
import Sandwich from "./Snadwich";

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
  let formIsValid = false;
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
    await fetch("https://frosty-wood-6558.getsandbox.com/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert("Something went wrong: " + error);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(dishesActions.onChangeId());
    if (typeOfDish === "pizza") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparation_time: preparationTime,
        no_of_slices: +noOfSlice,
        diameter: +diameter,
      };
      sendData(dish);
    }
    if (typeOfDish === "soup") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparation_time: preparationTime,
        spiciness_scale: +spiccnesesOfDish,
        id: id,
      };
      sendData(dish);
    }
    if (typeOfDish === "sandwich") {
      const dish = {
        type: typeOfDish,
        name: nameOfDish,
        preparation_time: preparationTime,
        slices_of_bread: +slicesOfBread,
        id: id,
      };
      sendData(dish);
    }
  };
  if (typeOfDish === "pizza") {
    if (
      nameOfDish !== "" &&
      preparationTime !== "" &&
      +noOfSlice > 0 &&
      +diameter > 0
    ) {
      formIsValid = true;
    }
  }
  if (typeOfDish === 'soup'){
    if (
      nameOfDish !== "" &&
      preparationTime !== "" &&
      +spiccnesesOfDish > 0
    ) {
      formIsValid = true;
    }
  }
  if (typeOfDish === 'sandwich'){
    if (
      nameOfDish !== "" &&
      preparationTime !== "" &&
      +slicesOfBread > 0
    ) {
      formIsValid = true;
    }
  }
  return (
    <div className={classes.dishes}>
      <form className={classes.dishesForm} onSubmit={onSubmit}>
      {!formIsValid && <div className={classes.wrong}>Please fill in the blank fields</div>}
      {formIsValid && <div className={classes.good}>Thank You. Have a good day</div>}
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
        <button disabled={!formIsValid} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Dishes;
