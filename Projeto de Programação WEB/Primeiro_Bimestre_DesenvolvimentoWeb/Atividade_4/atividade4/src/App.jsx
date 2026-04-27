import Aside from "./Components/Aside.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Nav from "./Components/Nav.jsx";
import Section from "./Components/Section.jsx";
import Section2 from "./Components/Section2.jsx";
import "./App.css"

export default function App() {

const Conteudo = {
  Titulo: "ObjG4mes",
  Paragrafo1: "Objetos dos seus Games favoritos",

  Titulo2: "O que é a ObjG4mes?",
  Paragrafo2: "A ObjG4mes é uma empresa especializada na criação de objetos 3D para jogos. Fundada em 2010, a empresa tem se destacado no mercado de desenvolvimento de jogos por sua qualidade e inovação. A ObjG4mes oferece uma ampla variedade de objetos, desde personagens e veículos até cenários e itens de decoração, todos criados com atenção aos detalhes e utilizando as mais recentes tecnologias de modelagem 3D.",
  
  Titulo3: "Nossos Serviços",
  Paragrafo3: "Oferecemos uma ampla gama de serviços de modelagem 3D, incluindo criação de personagens, veículos, cenários e itens de decoração. Nossa equipe de profissionais está sempre atualizada com as latest tecnologias do setor.",
  Titulo3_artigo: "Notícia em destaque",
  ArtigoEmdestaque: "A ObjG4mes acaba de lançar um novo pacote de objetos 3D para jogos, com modelos prontos para uso em personagens, cenários e equipamentos. Esta novidade traz mais facilidade para desenvolvedores e hobbyists que querem criar jogos com visual profissional.",

  Titulo4: "Por que escolher a ObjG4mes?",
  Paragrafo4: "A ObjG4mes é a escolha ideal para desenvolvedores de jogos que buscam objetos 3D de alta qualidade. A empresa conta com uma equipe de artistas talentosos e experientes, que trabalham em estreita colaboração com os clientes para garantir que suas necessidades sejam atendidas. Além disso, a ObjG4mes oferece preços competitivos e prazos de entrega rápidos, tornando-a uma opção acessível e confiável para desenvolvedores de jogos de todos os tamanhos.",

  Titulo5: "Entre em Contato",
  Paragrafo5: "Se você está interessado em nossos serviços ou tem alguma dúvida, não hesite em entrar em contato conosco. Nossa equipe de atendimento ao cliente está disponível para responder a todas as suas perguntas e fornecer um orçamento personalizado para o seu projeto de jogo.",

  Importante: "Na ObjG4mes, estamos comprometidos em fornecer objetos 3D de alta qualidade para jogos. Se você está procurando por objetos personalizados para o seu próximo projeto de jogo, entre em contato conosco hoje mesmo para discutir suas necessidades e obter um orçamento personalizado.",

  Rodape: "© 2026 Kalil. Todos os direitos reservados. Projeto desenvolvido para fins academicos.",

};

  return (
  <>

<Header
tituloheader={Conteudo.Titulo}
paragrafo_1={Conteudo.Paragrafo1}
/>
<Nav />

<div className="container">
<div className="esquerda">
<Section 
titulosection_1={Conteudo.Titulo2}
paragrafo_section_1={Conteudo.Paragrafo2}
/>
<Section2 
titulosection_2={Conteudo.Titulo3}
paragrafo_section_2={Conteudo.Paragrafo3}
 titulo3_artigo={Conteudo.Titulo3_artigo}
 artigo_em_destaque={Conteudo.ArtigoEmdestaque}
/>
</div>

<div className="direita">
<Main
importante={Conteudo.Importante}
/>

<Aside
TituloAside_5 = {Conteudo.Titulo5}
ParagrafoAside_5 = {Conteudo.Paragrafo5}
/>
</div>
</div>
<Footer 
TextoRodape={Conteudo.Rodape}
/>

  </>
  )
}