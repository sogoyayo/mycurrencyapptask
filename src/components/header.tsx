import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import { routes } from "@/config/routes"; // Import your routes

const navLinks = [
  { name: "Home", path: routes.home },
  { name: "About", path: routes.about },
  { name: "Shop", path: routes.shop },
  { name: "FAQs", path: routes.faq },
];

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto flex h-16 items-center gap-56 px-4 sm:px-6 lg:px-8">
        <Link to={routes.home}>
          <Logo className="w-16" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-16 text-sm">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#12305B] font-bold text-lg transition hover:text-[#12305B]/75"
                        : "text-[#12305B] text-lg transition hover:text-[#12305B]/75"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
