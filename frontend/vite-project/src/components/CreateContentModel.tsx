import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";

export function CreateContentModel({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 flex justify-center items-center">
          <div className="flex flex-col justify center">
            <span className="bg-white opacity   -100 p-4 rounded-lg ">
              <div className="flex justify-end mb-2">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col ">
                <Input placeholder={"title"} />
                <Input placeholder={"description"} />
              </div>
              <div className="flex justify-center mt-2">
                <Button variant="primary" text="submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="px-4 py-2 border rounded m-2"
      onChange={onChange}
    />
  );
}
