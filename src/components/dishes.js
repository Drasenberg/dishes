const Dishes = () => {
  return (
    <div>
      <form>
        <label for="name-of-dish">Name</label>
        <input type="text" name="name-of-dish" />
        <lable for="preparation-time">Preparation Time</lable>
        <input type="time" name="preparation-time" step="2" />
        <p>Choose type of dish</p>
        <label for="pizza">Pizza</label>
        <input type="radio" name="type-of-dish" id="pizza" />
        <label for="soup">Soup</label>
        <input type="radio" name="type-of-dish" id="soup" />
        <label for="sandwich">Sandwich</label>
        <input type="radio" name="type-of-dish" id="sandwich" />
      </form>
    </div>
  );
};

export default Dishes;