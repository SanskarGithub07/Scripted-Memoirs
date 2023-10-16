import "../Styles/Login.css";
export default function Login({ url }) {
  return (
    <>
      <div className="login">
        <div className="left">
          <img className="login-img" src={url} alt="no image" />
          <h1 className="login-text">Scripted Memoirs Login Page</h1>
        </div>

        <div className="right">
          <div className="form">
            <h1 className="form-title">Welcome Back</h1>
            <form className="sign-in" action="/" method="post">
              <div className="flexbox">
                <label className="title">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                />
              </div>

              <div className="flexbox">
                <label className="title">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                />
              </div>

              <div className="sign-in-button">
                <button type="submit">Sign In</button>
              </div>
            </form>

            <hr />

            <div className="other-options">
              <i className="fa-brands fa-google fa-2xl"></i>
              <i className="fa-brands fa-linkedin fa-2xl"></i>
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </div>

            <p className="text">Other Login Options</p>
            <p className="text">
              No account? <a href="">Create a new account.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
