const form = document.querySelector('#custom-form');
const whatsapp = 'https://wa.me/351935082437';

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const details = [];
  const colors = String(data.get('colors') || '').trim();
  const lining = String(data.get('lining') || '').trim();
  const detail = String(data.get('detail') || '').trim();
  const idea = String(data.get('idea') || '').trim();
  if (colors) details.push(`Cores/combinação: ${colors}`);
  if (lining) details.push(`Forro: ${lining}`);
  if (detail) details.push(`Detalhe: ${detail}`);
  if (idea) details.push(`Ideia: ${idea}`);
  const body = details.length ? `\n\nTenho estas ideias:\n${details.map((line) => `• ${line}`).join('\n')}` : '';
  const message = `Olá! Gostava de conversar sobre uma peça personalizada da Efata.${body}\n\nPodem confirmar as opções de materiais, valor e prazo?`;
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
