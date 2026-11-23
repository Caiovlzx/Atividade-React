function ItemFilme({ titulo, ano }) {
  return (
    <article>
      <strong>{titulo}</strong>
      <span> - ID: {ano}</span>
    </article>
  );
}

export default ItemFilme;
