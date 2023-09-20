import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/register/Register";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">

      <div className="min-h-screen flex flex-col gap-30 ">
        <header className="">

          <Navbar />

        </header>
        <main className="bg-gray-50 w-full  ">


          <Routes>

            <Route index path="/" element={<Home/>}/>


          </Routes>




        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
