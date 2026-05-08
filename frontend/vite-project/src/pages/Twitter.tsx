import { useEffect, useMemo, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useCotent } from "../hooks/useContent";

export function Twitter() {
  const { contents } = useCotent();
  const [query, setQuery] = useState("");

  const twitterContents = useMemo(
    () => contents.filter((item) => item.type === "twitter"),
    [contents],
  );

  const filteredContents = useMemo(() => {
    const lowered = query.trim().toLowerCase();
    if (!lowered) {
      return twitterContents;
    }
    return twitterContents.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowered) ||
        item.link?.toLowerCase().includes(lowered),
    );
  }, [query, twitterContents]);

  useEffect(() => {
    if (!filteredContents.length) {
      return;
    }

    const existingScript = document.getElementById("twitter-wjs");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
      return;
    }

    const twitterWidgets = (window as any).twttr?.widgets;
    if (twitterWidgets?.load) {
      twitterWidgets.load();
    }
  }, [filteredContents]);

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
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tweets..."
                className="bg-transparent text-white/80 placeholder:text-white/40 focus:outline-none"
              />
              <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                K
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6d5cff] to-[#b084ff]" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredContents.map((tweet) => (
            <div
              key={tweet.link}
              className="rounded-2xl border border-white/10 bg-[#12151c] p-5"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Twitter Thought
              </div>
              <div className="mt-3 text-sm font-semibold text-white">
                {tweet.title}
              </div>
              <div className="mt-3 text-sm text-white/60 leading-relaxed">
                <blockquote className="twitter-tweet">
                  <a href={tweet.link.replace("x.com", "twitter.com")}></a>
                </blockquote>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>{tweet.link}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5">
                  TWITTER
                </span>
              </div>
            </div>
          ))}
        </div>

        {!filteredContents.length && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#12151c] p-8 text-center text-sm text-white/60">
            No Twitter captures yet. Save a Twitter/X link to see it here.
          </div>
        )}
      </div>
    </div>
  );
}
