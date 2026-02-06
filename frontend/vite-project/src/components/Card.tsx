import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-96 border">
        <div className="flex justify-between">
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>  
            Projects Ideas
          </div>
          <div className="flex ">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
