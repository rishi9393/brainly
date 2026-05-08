import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Input } from "./Input";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      },
    );

    onClose();
  }
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="w-full max-w-lg bg-[#12151c] border border-white/10 rounded-2xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-white">
                  New capture
                </div>
                <div className="text-xs text-white/50">
                  Save a link into your brain
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white"
              >
                <CrossIcon />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <Input ref={titleRef} placeholder="Title" />
              <Input ref={linkRef} placeholder="Paste link" />
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                Type
              </div>
              <div className="flex gap-3 pt-3">
                <Button
                  text="YouTube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                />
                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={addContent} variant="primary" text="Save" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// function Input({
//   onChange,
//   placeholder,
// }: {
//   onChange: () => void;
//   placeholder: string;
// }) {
//   return (
//     <input
//     ref={ref}
//       placeholder={placeholder}
//       type="text"
//       className="px-4 py-2 border rounded m-2"
//       onChange={onChange}
//     />
//   );
// }
