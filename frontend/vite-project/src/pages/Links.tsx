import { Sidebar } from "../components/Sidebar";

const links = [
  {
    title: "The Cognitive Science of Digital Organization",
    source: "theverge.com",
    excerpt:
      "A deep dive into how our brains process information in a digital-first world.",
  },
  {
    title: "Understanding LLM Embeddings for Content Organization",
    source: "medium.com",
    excerpt:
      "How vector databases and multi-modal embeddings are changing how we search.",
  },
];

export function Links() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Sidebar />
      <div className="ml-64 px-8 pb-10">
        <div className="pt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50">Brainly</div>
            <h1 className="font-display text-3xl text-white">Links</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white/60">
              <span className="text-white/40">Search links...</span>
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                K
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6d5cff] to-[#b084ff]" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {links.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#12151c] p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                External Link
              </div>
              <div className="mt-3 text-sm font-semibold text-white">
                {item.title}
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {item.excerpt}
              </p>
              <div className="mt-4 text-xs text-white/40">{item.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
