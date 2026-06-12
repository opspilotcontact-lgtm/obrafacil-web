const PHONE = '34604488613';

export const PHONE_DISPLAY = '604 48 86 13';
export const PHONE_E164 = `+${PHONE}`;

export function whatsappLink(message?: string): string {
  const text = message ?? 'Hola, he visto vuestra web y quiero información sobre placas decorativas';
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappLink(productName: string, productId: string): string {
  return whatsappLink(`Hola, me interesa el producto ${productName} (${productId}). ¿Podéis darme más información?`);
}
