import { Sidebar } from "../components/Sidebar";

const tweets = [
  {
    title: "Thread capture",
    body: "Capturing threads into a second brain is easy. The challenge is building a retrieval system that works when you're under pressure.",
    tag: "SYSTEMS",
  },
  {
    title: "Design log",
    body: "A useful feed should feel like a studio wall: inspirations, drafts, artifacts, and finished pieces all coexist.",
    tag: "DESIGN",
  },
  {
    title: "Curation notes",
    body: "Digital gardening is a marathon, not a sprint. Your second brain is only as good as the soil you prepare.",
    tag: "CURATION",
  },
];

export function Twitter() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Sidebar />
      <div className="ml-64 px-8 pb-10">
        <div className="pt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50">Brainly</div>
            <h1 className="font-display text-3xl text-white">Twitter Feed</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white/60">
              <span className="text-white/40">Search tweets...</span>
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                K
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6d5cff] to-[#b084ff]" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tweets.map((tweet) => (
            <div
              key={tweet.title}
              className="rounded-2xl border border-white/10 bg-[#12151c] p-5"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Twitter Thought
              </div>
              <div className="mt-3 text-sm font-semibold text-white">
                {tweet.title}
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {tweet.body}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>@brainly · 4h ago</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5">
                  {tweet.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
