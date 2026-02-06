import { ShareIcon } from "../icons/ShareIcon";
import { Ignore } from './../../node_modules/ignore/index.d';

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-96 border max-w-72 text-md">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500 ">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch","embeded")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
