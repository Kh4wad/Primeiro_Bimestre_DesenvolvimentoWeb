export default function Article({ tituloDoPost, dataDoPost, paragrafo, paragrafo2, imagem, legenda }) {
  return (
    <article>
      <h2>{tituloDoPost}</h2>
      <time dateTime="2025-08-15">{dataDoPost}</time>
      <p>{paragrafo}</p>
      <p>{paragrafo2}</p>
      <figure>
        <img src={imagem} alt={legenda} />
        <figcaption>{legenda}</figcaption>
      </figure>
    </article>
  );
}