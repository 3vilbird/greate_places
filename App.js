import React from "react";
import PlacesNavigator from "./navigation/PlacesNavigation";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { init } from "./helpers/db";
import placesReducer from "./store/places-reducer";

enableScreens();
init()
  .then(() => {
    console.log("initilized the databse");
  })
  .catch((err) => console.log("initializing db error===>", err));

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
