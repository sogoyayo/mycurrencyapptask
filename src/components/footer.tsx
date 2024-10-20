import { footer_links } from "@/constants";
import CompanyLogo from "@/assets/images/company-logo.png";
import { FooterConsumerAdvisory } from "./footer-consumer-advisory";
import { FooterLinks } from "./footer-links";
import { GetInTouch } from "./get-in-touch";

const Footer = () => {
  return (
    <section className="py-10 bg-[#1d417e] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[90%]">
        <div className="mb-20">
          <img className="w-auto h-20 mx-auto" src={CompanyLogo} alt="" />
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-12 xl:divide-x xl:divide-slate-500">
          <div className="rounded-lg lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[min-content,min-content,1fr] lg:gap-16">
              <FooterLinks title="Company" links={footer_links.company} />
              <FooterLinks title="Contact" links={footer_links.contact} isContact />
              <FooterConsumerAdvisory />
            </div>
          </div>

          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default Footer;
