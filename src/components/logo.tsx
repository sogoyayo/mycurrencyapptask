import companyLogo from "@/assets/images/company-logo.png";
import cn from "@/utils/class-names";

export default function Logo({ className }: { className?: string }) {
  return <img src={companyLogo} alt="company logo" className={cn(className)} />;
}
