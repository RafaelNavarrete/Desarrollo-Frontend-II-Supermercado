const preguntas = [
  {
    pregunta: "¿Cómo se actualiza el stock de los productos?",
    respuesta:
      "El stock se actualiza cada vez que se registra una venta o la recepción de mercadería desde un proveedor.",
  },
  {
    pregunta: "¿Qué significa 'Stock bajo'?",
    respuesta:
      "Un producto está en 'Stock bajo' cuando sus unidades disponibles son menores al mínimo definido para ese producto. Es una señal para reponerlo.",
  },
  {
    pregunta: "¿Qué hago si un producto aparece como 'Agotado'?",
    respuesta:
      "Debes generar una orden de compra al proveedor correspondiente lo antes posible para reponer las unidades.",
  },
  {
    pregunta: "¿Puedo buscar un producto por categoría?",
    respuesta:
      "Sí, el buscador de la página de inicio filtra tanto por nombre del producto como por categoría.",
  },
];

function PreguntasFrecuentes() {
    return (
        <section>
            <h2>Preguntas Frecuentes</h2>
            <div clasName="faq">
                {preguntas.map((item) => (
                    <details key={item.pregunta}>
                        <summary>{item.pregunta}</summary>
                        <p>{item.respuesta}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default PreguntasFrecuentes;