import logo from "../assets/Logo.png";

export default function Header({ tituloheader, paragrafo_1 }) {

  return (
  <header>
    <div>
    <img src={logo} alt="Logo" />
    </div>
    <div>
    <h1>{tituloheader}</h1>
    <p>{paragrafo_1}</p>
    </div>
  </header>
  )
}