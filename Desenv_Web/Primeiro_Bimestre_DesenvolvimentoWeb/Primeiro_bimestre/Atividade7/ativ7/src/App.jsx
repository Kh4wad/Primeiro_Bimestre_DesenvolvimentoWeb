import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const postData = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "15 de agosto de 2025",
    paragrafo: "Explore as belezas das praias do Nordeste brasileiro.",
    paragrafo2: "Esta é uma oportunidade única.",
    imagem: "https://cdn.motor1.com/images/mgl/AkB8vL/s3/fiat-mobi-2023.jpg",
    legenda: "Legenda da imagem"
  };

  const direitosAutorais = "© 2024 - Todos os direitos reservados.";

  return (
    <div className="app">
      <div className="header-area">
        <Header titulo="Titulo" />
        <Navigation />
      </div>
      
      <main>
        <Article 
          tituloDoPost={postData.titulo}
          dataDoPost={postData.data}
          paragrafo={postData.paragrafo}
          paragrafo2={postData.paragrafo2}
          imagem={postData.imagem}
          legenda={postData.legenda}
        />
      </main>
      
      <Sidebar />
      <Footer direitos={direitosAutorais} />
    </div>
  );
}