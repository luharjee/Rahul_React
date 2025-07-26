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
    console.log("Ya ay");
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            {...register("firstName", { required: true, minLength: 3 })}
          />
        </div>
        <br />

        <div>
          <label>Middle Name: </label>
          <input type="text" {...register("middleName")} />
        </div>
        <br />

        <div>
          <label>Last Name: </label>
          <input type="text" {...register("lastName")} />
        </div>
        <button>submit</button>
      </form>
    </>
  );
}

export default App;
