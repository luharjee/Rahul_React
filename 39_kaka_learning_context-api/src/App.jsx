import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { CountProvider } from "./kaka";

function App() {
  return (
    <>
      <CountProvider>
        <Header />
        <Body />
        <Footer />
      </CountProvider>
    </>
  );
}

export default App;
