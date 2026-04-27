import facebook from "../assets/Facebook_icone.png";
import instagram from "../assets/Instagram_icone.png";
import whatsapp from "../assets/WhatsApp_icone.png";

export default function Aside({ TituloAside_5, ParagrafoAside_5 }) {

  return (
<aside>
<h2>{TituloAside_5}</h2>
<p>{ParagrafoAside_5}</p>
<ul className="social-list">
  <li><a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Facebook" /></a></li>
  <li><a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Instagram" /></a></li>
  <li><a href="https://web.whatsapp.com/" target="_blank"><img src={whatsapp} alt="WhatsApp" /></a></li>
</ul>

</aside>
  )
}