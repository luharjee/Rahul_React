import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting the form");
    console.log(data);
  };
  return (
    <>
      <h1>Kaka Shree form</h1>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> First Name : </label>
          <input
            type="text "
            {...register(
              "firstName",
              { pattern: /^[A-Za-z]+$/i },
              {
                required: true,
                minLength: { value: 4, message: "min length 4 " },
              }
            )}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="last"> Last Name : </label>
          <input type="text " {...register("lastName")} />
        </div>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
