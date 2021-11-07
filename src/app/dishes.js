import { createSlice } from "@reduxjs/toolkit";

const initialDishesState = {
  name_of_dish: "",
  preparation_time: "",
  no_of_slice: 0,
  diameter: 0,
  spiciness: 1,
  slices_of_bread: 0,
  type_of_dish: "",
  id: 0
};
const dishesSlice = createSlice({
  name: "dishes",
  initialState: initialDishesState,
  reducers: {
    onChangeSpicinnes(state, action) {
      state.spiciness = action.payload;
    },
    onChangeNoOfSlice(state, action) {
      state.no_of_slice = action.payload;
    },
    onDiameterChange(state, action) {
      state.diameter = action.payload;
    },
    onChangeSlicesOfBread(state, action) {
      state.slices_of_bread = action.payload;
    },
    onChangeTypeOfDish(state, action) {
      state.type_of_dish = action.payload;
    },
    onChangeNameOfDish(state, action) {
      state.name_of_dish = action.payload;
    },
    onChangePrepartionTime(state, action) {
      state.preparation_time = action.payload;
    },
    onChangeId(state) {
      state.id = state.id + 1;
    }
  },
});

export const dishesActions = dishesSlice.actions;

export default dishesSlice.reducer;
