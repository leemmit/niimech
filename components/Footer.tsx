import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Telegram", icon: "✈️", href: "#" },
  ];

  return (
    <footer className="bg-dark-gray text-white">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left side - Logo */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold text-light-gray hover:text-blue transition-colors"
            >
              LOGO
            </Link>
          </div>

          {/* Right side - Navigation and Social */}
          <div className="text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <Link
                href="#about"
                className="text-blue hover:text-blue-hover transition-colors"
              >
                О нас
              </Link>
              <Link
                href="#projects"
                className="text-blue hover:text-blue-hover transition-colors"
              >
                Проекты
              </Link>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-light-gray hover:text-blue transition-colors text-2xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-light-gray text-sm">
              <a
                href="mailto:info@company.com"
                className="hover:text-blue transition-colors"
              >
                info@company.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-light-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
