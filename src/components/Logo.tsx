import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-black text-black font-display">
        OF
      </span>
      <span className="font-display text-xl tracking-tight">
        <span className="text-white">OBRA</span>
        <span className="text-primary">FÁCIL</span>
      </span>
    </Link>
  );
}
