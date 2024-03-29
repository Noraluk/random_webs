export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full bg-slate-100">{children}</div>;
}
