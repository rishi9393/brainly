import Button from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";


export function Sigup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });
      alert("You have signed up");
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md min-w-48 flex flex-col p-8">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="justify-center flex mt-4">
          <Button
            variant="primary"
            text="Sign Up"
            fullWidth
            onClick={signup}
            loading={false}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
