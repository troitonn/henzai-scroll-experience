import React from 'react';
import HenzaiLogo from './HenzaiLogo';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Soluções",
      links: [
        { name: "Eficiência Energética", href: "#" },
        { name: "Consultoria Financeira", href: "#" },
        { name: "Representações", href: "#" },
        { name: "Energia Renovável", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#sobre" },
        { name: "Como Funciona", href: "#como-funciona" },
        { name: "Resultados", href: "#resultados" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "#" },
        { name: "Contato", href: "#contato" },
        { name: "FAQ", href: "#" },
        { name: "Política de Privacidade", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/henzaienergia/", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/henzai-energia/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-[#20405f] text-white">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

            <div>
              <HenzaiLogo variant="white" size="lg" className="mb-6" />

              <p className="font-gantari text-henzai-off-white text-lg mb-8 max-w-md leading-relaxed">
                Transformamos economia de energia em capital que acelera negócios.
                A inteligência que conecta energia, capital e crescimento.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-henzai-terracota" />
                  <span className="font-gantari">+55 11 97961-9109</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-henzai-terracota" />
                  <span className="font-gantari">contato@henzaienergia.com.br</span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-henzai-terracota" />
                  <span className="font-gantari">Rua Werner Von Siemens, 111 - 9 andar - Lapa de Baixo, São Paulo - SP, 05069-010</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="font-libre-franklin text-lg font-semibold mb-4 text-henzai-terracota">
                    {section.title}
                  </h3>

                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="font-gantari text-henzai-off-white hover:text-henzai-terracota transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <p className="font-gantari text-henzai-off-white">
              © {currentYear} Henzai Energia. Todos os direitos reservados.
            </p>

            <div className="flex items-center space-x-4">
              <span className="font-gantari text-henzai-off-white mr-4">Siga-nos:</span>

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-henzai-terracota flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
