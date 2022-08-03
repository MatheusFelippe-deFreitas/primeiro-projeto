import "./App.css";
import LogoSvg from "./logo.svg";

function App() {
  return (
    <div className="App" class="app">
      <div class="container2">
        <div class="conteudo">1</div>
        <div class="conteudo">2</div>
        <div class="conteudo">3</div>
        <div class="conteudo">4</div>
      </div>
      <div class="container">
        <div class="logo">
          <img src={LogoSvg} alt="Logo"></img>
        </div>
        <div class="conteudo">
          <div class="desc">Aqui vou escrever um conteudo</div>
        </div>
      </div>
      <div class="container">
        <div>Acabou</div>
      </div>
    </div>
  );
}

export default App;
