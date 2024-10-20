import { Link } from "react-router-dom";

interface FooterLinkItem {
  name: string;
  link: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLinkItem[];
  isContact?: boolean;
}

export const FooterLinks = ({ title, links, isContact = false }: FooterLinksProps) => {
  return (
    <div className="space-y-2 lg:space-y-6">
      <h3 className="font-semibold uppercase text-white">{title}</h3>
      <ul>
        {links.map((linkItem) => (
          <li key={linkItem.name} className="py-1 mb-2 whitespace-nowrap">
            {isContact ? (
              <div className="space-y-2">
                <p className="text-slate-400 capitalize text-sm md:text-base">
                  {linkItem.name}
                </p>
                <p className="font-medium text-sm md:text-base text-white">
                  {linkItem.link}
                </p>
              </div>
            ) : (
              <Link to={linkItem.link}>
                <p className="text-slate-400 capitalize text-sm md:text-base">
                  {linkItem.name}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
