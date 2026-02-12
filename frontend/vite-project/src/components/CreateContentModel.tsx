import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [type,setType] = useState(ContentType.Youtube);

  function addContent() {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
  }
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center">
          <div className="flex flex-col justify center">
            <span className="bg-white opacity   -100 p-f4 rounded-lg ">
              <div className="flex justify-end mb-2">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col ">
                <Input
                  ref={titleRef}
                  placeholder={"title"}
                  onChange={() => {}}
                />
                <Input
                  ref={descriptionRef}
                  placeholder={"description"}
                  onChange={() => {}}
                />
              </div>
              <div></div>
              <div className="">
                <Button text ="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=>{setType(ContentType.Youtube)}}></Button>
                <Button text ="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>

              </div>
              <div className="flex justify-center mt-2">
                <Button onClick={addContent} variant="primary" text="submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="px-4 py-2 border rounded m-2"
      onChange={onChange}
    />
  );
}
