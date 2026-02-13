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

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      type,
      title,
    },{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })

    onClose();
  }
  return (
    <div>
      <div>
        {open && (
          <div>
            {" "}
            (
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center ">
              <div className="flex flex-col justify center">
                <span className="bg-white opacity   -100 p-f4 rounded-lg ">
                  <div className="flex justify-end mb-2">
                    <div onClick={onClose} className="cursor-pointer">
                      <CrossIcon />
                    </div>
                  </div>
                  {/* how to solve the ref red line problem ?? */}
                  <div className="flex flex-col ">
                    <Input
                      ref={titleRef}
                      placeholder={"title"}
                    />
                    <Input
                      ref={linkRef}
                      placeholder={"link"}
                    />
                  </div>
                  <div>
                    <h1>Type</h1>
                    <div className="flex gap-2 p-4">
                      <Button
                        text="Youtube"
                        variant={
                          type === ContentType.Youtube ? "primary" : "secondary"
                        }
                        onClick={() => {
                          setType(ContentType.Youtube);
                        }}
                      ></Button>
                      <Button
                        text="Twitter"
                        variant={
                          type === ContentType.Twitter ? "primary" : "secondary"
                        }
                        onClick={() => {
                          setType(ContentType.Twitter);
                        }}
                      ></Button>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <Button
                      onClick={addContent}
                      variant="primary"
                      text="submit"
                    />
                  </div>
                </span>
              </div>
            </div>
            )
          </div>
        )}
      </div>
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
