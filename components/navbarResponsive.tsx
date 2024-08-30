"use client";
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

type NavbarResponsiveProps = {
  store: {
    name: string;
    logo: string;
  };
  categories: string[];
};

export default function NavbarResponsive({
  store,
  categories,
}: NavbarResponsiveProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-foreground md:px-6">
      {/* Muestra el logo y nombre de la tienda */}
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
      >
        <img src={store.logo} alt={store.name} className="w-6 h-6" />
        <span className="text-white">{store.name}</span>
      </Link>

      {/* Navegación principal */}
      <nav className="hidden space-x-6 text-sm font-medium md:flex">
        <Link
          href="/"
          className="px-4 py-3 rounded-md text-white hover:bg-zinc-800"
          prefetch={false}
        >
          Inicio
        </Link>
        {/* Dropdown de categorías */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link
              href="/"
              className="px-4 py-3 rounded-md text-white hover:bg-zinc-800"
              prefetch={false}
            >
              Productos
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {categories.map((category, index) => (
              <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="#"
          className="px-4 py-3 rounded-md text-white hover:bg-accent hover:bg-zinc-800"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>

      {/* Íconos de usuario y carrito */}
      <div className="flex items-center gap-4">
        <Button variant="destructive" size="icon">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="sr-only">Ver carrito</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="destructive" size="icon">
              <UserIcon className="w-6 h-6" />
              <span className="sr-only">Ver Perfil</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mi cuenta</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menú móvil */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="destructive" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6 stroke-white hover:stroke-black" />
            <span className="sr-only">Alternar navegación</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  Productos
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {categories.map((category, index) => (
                  <DropdownMenuItem key={index}>{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
