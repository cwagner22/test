import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./styles.css";

const DEFAULT_VALUES = {
  test: true
};

function App() {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: { test: true }
  });

  const valueWithDefault = watch("test", false);
  console.log(valueWithDefault);
  return null;
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  // const onReset = () => {
  //   reset(DEFAULT_VALUES);
  // };

  // const valueWithDefault = watch("test", false);
  // const valueWithoutDefault = watch("test");

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <label className="Checkbox">
  //       {/* <input type="checkbox" name="test" ref={register()} /> */}
  //       Check this checkbox
  //     </label>

  //     <p>
  //       Checkbox watch value (with default):{" "}
  //       {!!valueWithDefault ? "TRUE" : "FALSE"}
  //     </p>
  //     <p>Real checkbox value: {!!valueWithoutDefault ? "TRUE" : "FALSE"}</p>

  //     <button type="button" onClick={onReset}>
  //       Reset
  //     </button>

  //     <input type="submit" />
  //   </form>
  // );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
