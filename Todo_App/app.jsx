import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <TodoApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
