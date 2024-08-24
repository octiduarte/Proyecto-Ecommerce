import Link from "next/link";

const SectionFooter = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8 ">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/placeholder.svg"
            alt="Acme Store"
            width={40}
            height={40}
            className="w-10 h-10"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <span className="text-lg font-bold">Acme Store</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-foreground" prefetch={false}>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default SectionFooter;
