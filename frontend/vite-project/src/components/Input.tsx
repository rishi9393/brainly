export function Input({
  placeholder,
  ref,
}: {
  placeholder: string;
  ref?: any;
}) {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      type="text"
      className="w-full px-4 py-3 rounded-xl bg-[#12151c] border border-white/10 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
    />
  );
}
