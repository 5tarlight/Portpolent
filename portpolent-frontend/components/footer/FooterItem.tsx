const FooterItem = ({ children }: { children: string }) => {
  return (
    <div className="select-none cursor-pointer hover:underline">{children}</div>
  );
};

export default FooterItem;
