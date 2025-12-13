export function PreviewItem({ label, value }: { label: string; value: any }) {
  if (!value) return null;

  return (
    <div className="grid grid-cols-3 gap-2 text-sm py-1 border-b">
      <div className="font-medium text-gray-700">{label}</div>
      <div className="col-span-2 text-gray-900 break-all">{String(value)}</div>
    </div>
  );
}
