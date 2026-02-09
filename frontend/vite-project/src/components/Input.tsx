
export function Input({ onChange, placeholder }: { placeholder: string; onChange: () => void }) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="px-4 py-2 border rounded m-2"
      onChange={onChange}
    />
  );
}
