import axios from "axios";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });
      console.log("Response:", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Signin successful!");
      }
    } catch (error: any) {
      console.error("Error details:", error.response?.data || error.message);
      alert("Signin failed: " + (error.response?.data?.message || "Please try again."));
    }
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md min-w-48 flex flex-col p-8">
        <Input placeholder="Username" ref={usernameRef} />
        <Input placeholder="Password" ref={passwordRef} />
        <div className="justify-center flex mt-4">
          <Button
            variant="primary"
            text="Sign In"
            fullWidth
            onClick={signin}
            loading={false}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
