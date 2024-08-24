'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function NavbarResponsive() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-background border-b md:px-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
      >
        <MountainIcon className="w-6 h-6" />
        <span className="sr-only">Empresa</span>
      </Link>
      <nav className="hidden space-x-6 text-sm font-medium md:flex">
        <Link
          href="#"
          className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Inicio
        </Link>
        <Link
          href="#"
          className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Productos
        </Link>
        <Link
          href="#"
          className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="sr-only">Ver carrito</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <UserIcon className="w-6 h-6" />
              <span className="sr-only">View Perfil</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mi cuenta</DropdownMenuItem>
            <DropdownMenuItem>Configuracion</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesion</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Alternar navegacion</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden">
          <nav className="grid gap-4 p-4 text-sm font-medium">
            <Link
              href="#"
              className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Productos
            </Link>
            <Link
              href="#"
              className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Contacto
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
