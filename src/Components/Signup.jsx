import "../Styles/Signup.css";

export default function Signup() {
  return (
    <>
      <div className="register">
        <h1 className="free-account">Create a free account now</h1>
        <form className="reg-form">
          <div className="flexbox">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              autoComplete="off"
            />
          </div>

          <div className="flexbox">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
            />
          </div>

          <div className="flexbox">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
            />
          </div>

          <div className="flexbox">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              autoComplete="off"
            />
          </div>

          <div className="submit-button">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </>
  );
}
