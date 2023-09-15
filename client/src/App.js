import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/register/Register";


function App() {
  return (
    <div className="App">

      <div className="min-h-screen flex flex-col gap-30 ">
        <header className=" bg-red-200">

          <Navbar />

        </header>
        <main className="bg-gray-200 w-full  ">


          <Routes>

            <Route index path="/" element={<p>jobs</p>}/>


          </Routes>




        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
