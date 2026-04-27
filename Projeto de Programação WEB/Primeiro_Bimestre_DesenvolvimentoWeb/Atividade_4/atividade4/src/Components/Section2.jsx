export default function Section2({ titulosection_2, paragrafo_section_2, titulo3_artigo, artigo_em_destaque }) {

  return (
<section className="section2">
  
  <h2>{titulosection_2}</h2>
  <p>{paragrafo_section_2}</p>
  <img src="https://i.all3dp.com/wp-content/uploads/2020/01/06151226/SketchUp_Free_Alternative_Blender.jpg" alt="Serviços de modelagem 3D" />

  <article>
    <h3>{titulo3_artigo}</h3>
    <img src="https://aerojr.com/imagens_upload/2021/06/2021-06-04-3-1024x551.png" alt="Notícia ObjG4mes" />
    <p>{artigo_em_destaque}</p>
  </article>

</section>
  )
}