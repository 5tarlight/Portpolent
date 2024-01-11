const FooterHeadline = ({ children }: { children: string }) => {
  return (
    <div className="font-bold text-purple-200 select-none">
      {children}
    </div>
  );
};

export default FooterHeadline;
