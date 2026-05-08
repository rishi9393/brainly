import Button from "../components/Button";
import { Sidebar } from "../components/Sidebar";

const videos = [
  {
    title: "The Future of Concurrent Systems",
    duration: "14:32",
    channel: "Tech Insights",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    tag: "CODING",
  },
  {
    title: "How Gravity Actually Works: A Deep Dive",
    duration: "28:15",
    channel: "Cosmos EDU",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    tag: "SCIENCE",
  },
  {
    title: "Building the Ultimate Minimalist Setup",
    duration: "08:45",
    channel: "Modern Space",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    tag: "HARDWARE",
  },
  {
    title: "Large Language Models: From Scratch",
    duration: "42:10",
    channel: "Neural Academia",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80",
    tag: "AI",
  },
  {
    title: "Python Performance Tips You Didn't Know",
    duration: "12:00",
    channel: "Dev Masterclass",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=900&q=80",
    tag: "DEV",
  },
  {
    title: "Visual Design Systems: A Practical Guide",
    duration: "19:54",
    channel: "Design Theory",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    tag: "DESIGN",
  },
];

export function Youtube() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Sidebar />
      <div className="ml-64 px-8 pb-10">
        <div className="pt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-white/50">Brainly</div>
            <div className="text-xs text-white/40">YouTube Library</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white/60">
              <span className="text-white/40">Search library...</span>
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                K
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6d5cff] to-[#b084ff]" />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="font-display text-3xl text-white">YouTube Library</h1>
          <p className="mt-2 text-sm text-white/50">
            Curated video insights from your digital ecosystem.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#12151c] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Total watch time
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              128 Hours
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#12151c] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Saved videos
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              42 Videos
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#12151c] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Top channel
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              Veritasium
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1 text-white">
              All Videos
            </span>
            <span className="px-3 py-1">Most Recent</span>
            <span className="px-3 py-1">Top Channels</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" text="Filter" />
            <Button variant="primary" text="Save Video" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#12151c]"
            >
              <div className="relative">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-36 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-[10px] text-white">
                  {video.duration}
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                  {video.tag}
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-white">
                  {video.title}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                  <div className="h-6 w-6 rounded-full bg-white/10" />
                  <span>{video.channel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
