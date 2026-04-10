// tools.js — Scalebar PDF Tools
// Single source of truth for tool list and names.
// Loaded synchronously (no defer/async) so window.TOOLS and
// window.buildOtherTools are available before any page script runs.

window.TOOLS = [
  { id:'compress',       url:'/compress',       icon:'🗜',
    en:'Compress PDF',              es:'Comprimir PDF' },
  { id:'vineta',         url:'/vineta',         icon:'📋',
    en:'Title block',               es:'Viñeta / carátula' },
  { id:'patch',          url:'/patch',          icon:'⬜',
    en:'Patch / Redact',            es:'Parche / Redactar' },
  { id:'scalebar',       url:'/scalebar',       icon:'📏',
    en:'Scale bar (m)',             es:'Barra de escala (m)' },
  { id:'scalebar-ft',    url:'/scalebar_ft',    icon:'📐',
    en:'Scale bar (ft)',            es:'Barra de escala (ft)' },
  { id:'watermark-logo', url:'/watermark_logo', icon:'🔖',
    en:'Logo watermark',            es:'Marca de agua — logo' },
  { id:'watermark-text', url:'/watermark_text', icon:'✒',
    en:'Text watermark',            es:'Marca de agua — texto' },
  { id:'crop',           url:'/crop',           icon:'📋',
    en:'Resize to format',          es:'Ajustar formato' },
  { id:'reorder',        url:'/reorder',        icon:'⇅',
    en:'Reorder & remove pages',    es:'Reordenar y eliminar páginas' },
  { id:'split',          url:'/split',          icon:'✂',
    en:'Split PDF',                 es:'Dividir PDF' },
  { id:'merge',          url:'/merge',          icon:'⊕',
    en:'Merge PDFs',                es:'Unir PDFs' },
  { id:'convert',        url:'/convert',        icon:'🖼',
    en:'Convert to images',         es:'Convertir a imágenes' },
  { id:'img2pdf',        url:'/imagetopdf',     icon:'🗒',
    en:'Image to PDF',              es:'Imagen a PDF' },
  { id:'plan-numbering', url:'/plan_numbering', icon:'🔢',
    en:'Plan numbering',            es:'Numeración de planos' },
  { id:'revision-cloud', url:'/revision_cloud', icon:'☁',
    en:'Revision cloud',            es:'Nube de revisión' },
  { id:'grid',           url:'/grid',           icon:'#',
    en:'Page grid',                 es:'Grilla de página' },
  { id:'ocr',            url:'/ocr',            icon:'🔍',
    en:'OCR — searchable PDF',      es:'OCR — PDF buscable' },
  { id:'pdfa',           url:'/pdfa',           icon:'📄',
    en:'Convert to PDF/A',          es:'Convertir a PDF/A' },
  { id:'linewidth',      url:'/linewidth',      icon:'✏',
    en:'Line weight',               es:'Peso de línea' },
  { id:'text-note',      url:'/text_note',      icon:'💬',
    en:'Text note',                 es:'AAAAAAAAAA' },
  { id:'page-numbers',   url:'/page_numbers',   icon:'🔢',
    en:'Page numbers',              es:'Numeración de páginas' },
  { id:'rotate-pages',   url:'/rotate_pages',   icon:'↻',
    en:'Rotate pages',              es:'Rotar páginas' },
  { id:'extract-pages',  url:'/extract_pages',  icon:'📤',
    en:'Extract pages',             es:'Extraer páginas' },
  { id:'add-image',      url:'/add_image',      icon:'🖼',
    en:'Add image',                 es:'Añadir imagen' },
];

// Builds the "other tools" strip as real <a> links (important for SEO).
// currentId  — id of the tool currently open (it will be excluded from the list)
// lang       — 'en' or 'es'  (defaults to 'en')
window.buildOtherTools = function(currentId, lang) {
  var strip = document.getElementById('other-tools-strip');
  if (!strip) return;
  strip.innerHTML = '';
  var lg = lang || 'en';
  window.TOOLS.filter(function(t) { return t.id !== currentId; }).forEach(function(t) {
    var a = document.createElement('a');
    a.className = 'other-btn';
    a.href = t.url;
    a.textContent = t[lg] || t.en;
    strip.appendChild(a);
  });
};
