interface HorizontalScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const HorizontalScrollSnapContainer = ({
  children,
  className = "",
  title,
}: HorizontalScrollSnapContainerProps) => {
  return (
    <div className={`relative my-14 py-14 ${className}`}>
      {title && <h3 className="section-title mb-8 pl-5 md:pl-14 lg:pl-56">{title}</h3>}
      <div className="flex gap-4 snap-x scroll-pl-14 lg:scroll-pl-56 space-x-4 overflow-x-auto py-6 px-4 sm:px-8 lg:px-52">
        {children}
      </div>
    </div>
  );
};
