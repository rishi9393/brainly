import Button from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

const sharedCards = [
  {
    title: "The biggest mistake in productivity",
    tag: "SYSTEMS",
    meta: "Twitter Thread",
    body: "The biggest mistake in productivity isn't the lack of tools, it's the lack of a system. Capturing is easy. Retrieval is the real challenge.",
  },
  {
    title: "Brainly graph view",
    tag: "TOOLING",
    meta: "Twitter Thought",
    body: "Just tried the new Brainly graph view. Seeing the connections between my reading notes and project tasks is a game changer.",
  },
  {
    title: "Knowledge is not wisdom",
    tag: "THEORY",
    meta: "Twitter Update",
    body: "Information is not knowledge. Knowledge is not wisdom. Wisdom is not action. We need better bridges between these stages.",
  },
  {
    title: "Cognitive load theory",
    tag: "UX DESIGN",
    meta: "Thread Capture",
    body: "Why your dashboard feels cluttered and how to fix it using progressive disclosure and spatial memory hooks.",
  },
  {
    title: "LLMs are changing how we archive",
    tag: "AI TECH",
    meta: "Dev Log",
    body: "Instead of tags, I'm using vector embeddings to find similar threads across my last 10 years of tweets.",
  },
  {
    title: "Digital gardening is a marathon",
    tag: "CURATION",
    meta: "Curation Notes",
    body: "Your second brain is only as good as the soil you prepare for it today.",
  },
];

export function Shared() {
  const { hash } = useParams();

  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Sidebar />
      <div className="ml-64 px-8 pb-10">
        <div className="pt-6 flex items-center justify-between">
          <div className="text-sm text-white/50">Shared Space</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white/60">
              <span className="text-white/40">Search knowledge...</span>
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                K
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6d5cff] to-[#b084ff]" />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#12151c] p-6">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#2c3e50] to-[#8e44ad]" />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-display text-2xl text-white">
                  Alex Rivers
                </h1>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/60">
                  PRO CONTRIBUTOR
                </span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                Curating insights on cognitive architecture, systems thinking,
                and the future of human-AI collaboration.
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                <span>124 Notes</span>
                <span>2.4k Followers</span>
                <span>brainly.so/{hash ?? "alex"}</span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="primary" text="Follow" />
              <Button variant="secondary" text="Share" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1 text-white">
              All Content
            </span>
            <span className="px-3 py-1">Most Recent</span>
            <span className="px-3 py-1">Popular</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sharedCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#12151c] p-5"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {card.meta}
              </div>
              <div className="mt-3 text-sm font-semibold text-white">
                {card.title}
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {card.body}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>@arivers · 2h ago</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
