import Button from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { CreateContentModel } from "../components/CreateContentModel";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useCotent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh } = useCotent();

  const fallbackContents = [
    {
      title: "Advanced Design Systems with Tailwind CSS",
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      type: "youtube" as const,
    },
    {
      title: "The cognitive science of digital organization",
      link: "https://x.com/brainly/status/173657139658178",
      type: "twitter" as const,
    },
    {
      title: "Building a second brain: complete workflow",
      link: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      type: "youtube" as const,
    },
    {
      title: "Knowledge graphs are not knowledge",
      link: "https://twitter.com/brainly/status/173657139658178",
      type: "twitter" as const,
    },
  ];

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Sidebar />
      <div className="ml-64 min-h-screen px-8 pb-10">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />

        <div className="pt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50">Brainly</div>
            <h1 className="font-display text-3xl text-white">All Notes</h1>
          </div>
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

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1 text-white">
              All Content
            </span>
            <span className="px-3 py-1">Most Recent</span>
            <span className="px-3 py-1">Popular</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              text="Share"
              startIcon={<ShareIcon />}
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  },
                );
                const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                alert("Share URL: " + shareUrl);
              }}
            />
            <Button
              variant="primary"
              text="New Capture"
              startIcon={<PlusIcon />}
              onClick={() => {
                setModelOpen(true);
              }}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(contents.length ? contents : fallbackContents).map(
            ({ link, title, type }, index) => (
              <Card
                key={`${link}-${index}`}
                type={type}
                title={title}
                link={link}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
