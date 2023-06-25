
import FilterLists from "./Components/FilterLists";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div className="relative">
    <Navbar/>
    <div className="bg-slate-100 flex px-5 pt-10 justify-center">
      <FilterLists/>
    </div>
    </div>
  
    </>
  );
}

export default App;
