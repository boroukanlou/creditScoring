export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-4 space-y-2 bg-white shadow-sm">
      <h2 className="text-lg font-semibold border-b pb-1">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
