import { useEffect } from "react";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  useEffect(() => {
    if (type !== "twitter") return;

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
  }, [link, type]);

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
      : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#12151c] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      {type === "youtube" && (
        <div className="relative">
          <img
            src={getYouTubeThumbnail(link)}
            alt={title}
            className="h-40 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 text-xs text-white/70">
            14:32
          </div>
        </div>
      )}

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              {type === "youtube" ? "YouTube" : "Twitter"}
            </div>
            <div className="pt-2 text-sm font-semibold text-white">
              {title || "Untitled"}
            </div>
          </div>
          <a
            className="text-white/50 hover:text-white"
            href={link}
            target="_blank"
          >
            <ShareIcon />
          </a>
        </div>

        {type === "twitter" && (
          <div className="text-sm text-white/70 leading-relaxed overflow-hidden">
            <blockquote className="twitter-tweet" data-theme="dark">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-white/50">
          <span>Saved 2 hours ago</span>
          <span className="rounded-full border border-white/10 px-2 py-0.5">
            Focus
          </span>
        </div>
      </div>
    </div>
  );
}
