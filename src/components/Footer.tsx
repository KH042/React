import { Container, Facebook, Linkedin, Twitter, } from "lucide-react";

const Footer= () => {
    return (
        <footer className="footer footer-center  p-10">
        <aside>
        <Container className="w-10 h-10"/>
          <p className="font-bold">
          KH <span className="text-secondary">DEV</span>
          </p>
          <p>Copyright © {new Date().getFullYear()} - Tous  droits  reservés</p>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener">
            <Twitter className="w-6 h-6 text-current"/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener">
            <Linkedin className="w-6 h-6 text-current"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener">
            <Facebook className="w-6 h-6 text-current"/>
            </a>
          </div>
        </aside>
        
        
    
      </footer>
    );
  };
  
  export default Footer;