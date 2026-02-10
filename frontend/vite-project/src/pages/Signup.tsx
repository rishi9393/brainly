import { sign } from "crypto";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { use, useRef } from "react";
import { BACKEND_URL } from "../config";

const usernameRef = useRef<any>();
const passwordRef = useRef<any>();

export function Sigup() {
  function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    axios.post(`${BACKEND_URL}`)
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md min-w-48 flex flex-col p-8">
        <Input ref={usernameRef} placeholder="Username" onChange={() => {}} />
        <Input ref={passwordRef} placeholder="Password" onChange={() => {}} />
        <div className="justify-center flex mt-4">
          <Button
            variant="primary"
            text="Sign Up"
            fullWidth
            onClick={signup}
            loading={true}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
