import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import logo from "./assets/login-manuscript-2.webp";
import Compose from "./Components/Compose";
function App() {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/", { mode: "cors" });
  //     const data = await response.json();
  //     console.log({ data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   makeAPICall();
  // }, []);

  return (
    <>
      <Navbar />
      {/* <Signup /> */}
      {/* <Login url={logo} /> */}
      {/* <Compose /> */}
    </>
  );
}

export default App;
