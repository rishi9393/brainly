import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Sidebar } from "../components/Sidebar";
import { useCotent } from "../hooks/useContent";

export function Youtube() {
  const { contents } = useCotent();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const youtubeContents = useMemo(
    () => contents.filter((item) => item.type === "youtube"),
    [contents],
  );

  const filteredContents = useMemo(() => {
    const lowered = query.trim().toLowerCase();
    if (!lowered) {
      return youtubeContents;
    }
    return youtubeContents.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowered) ||
        item.link?.toLowerCase().includes(lowered),
    );
  }, [query, youtubeContents]);

  const uniqueSources = useMemo(() => {
    const sources = new Set<string>();
    youtubeContents.forEach((item) => {
      try {
        const url = new URL(item.link);
        sources.add(url.hostname.replace("www.", ""));
      } catch {
        return;
      }
    });
    return sources.size;
  }, [youtubeContents]);

  const latestTitle = youtubeContents[0]?.title ?? "No captures yet";

  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtu.be\/|v=|\/embed\/|\/v\/|\/shorts\/)([A-Za-z0-9_-]{11})/,
    );
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const id = getYouTubeId(url);
    return id
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80";
  };

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
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search library..."
                className="bg-transparent text-white/80 placeholder:text-white/40 focus:outline-none"
              />
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
              Saved videos
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              {youtubeContents.length} Videos
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#12151c] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Unique sources
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              {uniqueSources || 0}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#12151c] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Latest capture
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">
              {latestTitle}
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
            <Button
              variant="primary"
              text="Save Video"
              onClick={() => navigate("/dashboard")}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredContents.map((video) => (
            <div
              key={video.link}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#12151c]"
            >
              <div className="relative">
                <img
                  src={getYouTubeThumbnail(video.link)}
                  alt={video.title}
                  className="h-36 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
                  YOUTUBE
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-white">
                  {video.title}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                  <div className="h-6 w-6 rounded-full bg-white/10" />
                  <span>{video.link}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!filteredContents.length && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#12151c] p-8 text-center text-sm text-white/60">
            No YouTube captures yet. Save a YouTube link to see it here.
          </div>
        )}
      </div>
    </div>
  );
}
