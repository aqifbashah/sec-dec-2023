import { useForm } from "react-hook-form";

function FormC() {
  const form = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="input-container">
          <h3>Form A</h3>
          <label htmlFor="email">Email</label>
          <input type="email" {...form.register("email", { required: true })} />
          {form.formState.errors.email ? (
            <span className="error">Email is required</span>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...form.register("password", { required: true })}
          />
          {form.formState.errors.password ? (
            <span className="error">Password is required</span>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...form.register("confirmedPassword", { required: true })}
          />
          {form.formState.errors.confirmedPassword ? (
            <span className="error">Confirm password is required</span>
          ) : null}
        </div>
        <div className="input-container">
          <button type="submit">Register</button>
          <button onClick={form.reset} className="btn-outline" type="reset">
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}

export default FormC;
