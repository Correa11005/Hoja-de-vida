function downloadPDF() {
  const element = document.querySelector('#pdf-content');
  if (!element) {
    console.error('No se encontró #pdf-content. Revisa las etiquetas cerradas.');
    alert('Error: No se encontró el contenido a exportar.');
    return;
  }

  const opt = {
    margin: [10, 5, 15, 5], // mm
    filename: 'Hoja_de_Vida_Jacobo_Correa_L.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: false,   // Si falla por CORS, prueba true
      scrollY: 0
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  html2pdf().set(opt).from(element).save()
    .catch(err => {
      console.error('html2pdf error:', err);
      alert('No se pudo generar el PDF. Revisa la consola (F12) para ver el error.');
    });
}