import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  robots: { index: false },
};

export default function Privacidad() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <h1 className="font-display text-3xl text-black">POLÍTICA DE PRIVACIDAD</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-600">
        <p>En ObraFácil tratamos tus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales.</p>
        <h2 className="text-lg font-semibold text-black">Datos que recopilamos</h2>
        <p>Cuando nos contactas por WhatsApp o email, recopilamos tu nombre, número de teléfono o dirección de email con el fin de atender tu consulta o pedido.</p>
        <h2 className="text-lg font-semibold text-black">Finalidad del tratamiento</h2>
        <p>Tus datos se utilizan exclusivamente para gestionar tu consulta, presupuesto o pedido. No se ceden a terceros salvo obligación legal.</p>
        <h2 className="text-lg font-semibold text-black">Derechos del usuario</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y oposición enviando un email a info@obrafacil.es.</p>
        <h2 className="text-lg font-semibold text-black">Cookies</h2>
        <p>Esta web utiliza cookies esenciales para su funcionamiento. Consulta nuestra política de cookies para más información.</p>
      </div>
    </div>
  );
}
