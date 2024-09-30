import Link from 'next/link';
import { Button } from './button';

export function AddToCart({ id }: { id: number }) {
    return (
      <Link
        href=""
      >
        <Button variant="destructive" size="sm" className="w-full">
        Agregar a carrito
      </Button>
      </Link>
    );
  }
  