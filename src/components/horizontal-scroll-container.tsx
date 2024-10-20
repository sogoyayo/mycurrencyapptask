interface HorizontalScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalScrollSnapContainer = ({
  children,
  className = "",
}: HorizontalScrollSnapContainerProps) => {
  return (
    <div className={`relative my-14 py-14 ${className}`}>
      <div className="flex gap-4 snap-x scroll-pl-14 lg:scroll-pl-56 space-x-4 overflow-x-auto py-6 px-52">
        {children}
      </div>
    </div>
  );
};
