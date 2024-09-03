import Link from "next/link";
import SocialIcon from "./ui/icons"; 

type SectionFooterProps = {
  store: {
    name: string;
    logo: string;
    socialMedia: {
      name: string;
      url: string;
    }[]; 
  };
};

export default function SectionFooter({
  store
}: SectionFooterProps) {

  const socialMediaArray = Array.isArray(store.socialMedia) 
    ? store.socialMedia 
    : store.socialMedia ? [store.socialMedia] : []; 

  return (
    <footer className="border text-muted-foreground py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={store.logo} alt={store.name} className="w-6 h-6" />
          <span className="text-lg font-bold">{store.name}</span>
        </div>
        <div>
          <span>Created By Duarte</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          {socialMediaArray.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <SocialIcon name={social.name} className="w-5 h-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
