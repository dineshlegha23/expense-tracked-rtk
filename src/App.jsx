import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import TransactionList from "./components/TransactionList";
function App() {
  return (
    <div>
      <Navbar />
      <MainContainer />
      <TransactionList />
    </div>
  );
}
export default App;
