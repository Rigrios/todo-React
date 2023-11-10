import Header from "./components/header/Header";
import style from './App.module.css'
import Body from "./components/body/Body";

function App() {
  console.log("App-Render")
  return (
    <div className={style.app}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
