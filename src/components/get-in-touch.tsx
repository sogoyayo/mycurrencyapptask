import { FooterSocialLinks } from "./footer-social-links";

export const GetInTouch = () => {
  return (
    <div className="space-y-2 lg:space-y-6 xl:pl-10">
      <h3 className="font-semibold uppercase text-white">Get in Touch</h3>{" "}
      <div className="space-y-3 lg:space-y-8">
        <p className="text-slate-400">Feel free to get in touch with us vai email</p>
        <p className="text-3xl text-white">hello@sleepstiq.com</p>
        <FooterSocialLinks />
        <p className="text-slate-400 text-sm">© 2020@sleepstiq. All Rights Reserved.</p>
      </div>
    </div>
  );
};
