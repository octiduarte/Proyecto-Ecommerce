import Link from 'next/link';
import { Button } from './button';

export function AddToCart({ id }: { id: number }) {
    return (
      <Link
        href={`/productview/${id}/`}
      >
        <Button variant="destructive" className="w-full">
        Agregar a carrito
      </Button>
      </Link>
    );
  }
  