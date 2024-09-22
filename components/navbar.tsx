import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

type NavbarResponsiveProps = {
  store: {
    name: string;
    logo: string;
  };
  categories: string[];
};

export default function Navbar({ store, categories }: NavbarResponsiveProps) {
  return (
    <>
      <header className="sticky top-0 z-50 flex bg-foreground h-16 w-full items-center justify-between  px-4 md:px-6 lg:px-8 border-b border-gray-500 ">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <div className="bg-background rounded-full p-1">
            <img src={store.logo} alt={store.name} className="w-6 h-6" />
          </div>
          <span className="text-background">{store.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="px-4 py-3 rounded-md text-background hover:bg-accent-foreground"
                  prefetch={false}
                >
                  Inicio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-background hover:bg-accent-foreground">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] p-2 bg-black">
                    {categories.map((category, index) => (
                      <NavigationMenuLink asChild key={index}>
                        <Link
                          href="#"
                          className="group text-zinc-300 grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium  transition-colors  hover:bg-accent-foreground  focus:bg-accent   disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          prefetch={false}
                        >
                          <div className="text-sm  font-medium leading-none group-hover:underline">
                            {category}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="group text-background grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors  hover:bg-accent-foreground  focus:bg-accent   disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium  leading-none group-hover:underline">
                          Ver todos los productos
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="px-4 py-3 rounded-md text-background hover:bg-accent-foreground"
                  prefetch={false}
                >
                  Contacto
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="blanco" size="icon">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="sr-only">Ver carrito</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Product Name</h4>
                    <p className="text-sm text-muted-foreground">$19.99</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <MinusIcon className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                    <span>1</span>
                    <Button variant="ghost" size="icon">
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Add</span>
                    </Button>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Subtotal</h4>
                  </div>
                  <div>
                    <span>$19.99</span>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="w-full">Checkout</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="blanco" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Alternar navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby="descripcion-menu">
              <VisuallyHidden>
                <DialogTitle>Menú de navegación</DialogTitle>
              </VisuallyHidden>
              <p id="descripcion-menu" className="sr-only">
                Este es el menú de navegación de la tienda, aquí puedes navegar
                entre los productos y otras secciones.
              </p>
              <div className="grid gap-6 p-6">


                {/* Navegación móvil */}
                <nav className="grid gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-background transition-colors hover:bg-accent-foreground"
                    prefetch={false}
                  >
                    <HomeIcon className="h-5 w-5" />
                    Inicio
                  </Link>

                  {/* Collapsible para "Productos" */}
                  <Collapsible className="grid gap-4">
                    <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-background transition-colors hover:bg-accent-foreground  [&[data-state=open]>svg]:rotate-90">
                      <ShoppingBagIcon className="h-5 w-5" />
                      Productos
                      <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="-mx-6 grid gap-2 bg-accent-foreground p-6">
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                            prefetch={false}
                          >
                            <ShirtIcon className="h-5 w-5" />
                            {category}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                          prefetch={false}
                        >
                          Ver todos
                        </Link>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-background transition-colors hover:bg-accent-foreground "
                    prefetch={false}
                  >
                    <UsersIcon className="h-5 w-5" />
                    Contacto
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
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

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
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

function PaintbrushIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ShirtIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
