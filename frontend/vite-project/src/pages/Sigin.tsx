import axios from "axios";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { LogoIcon } from "../icons/logoIcon";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Error details:", error.response?.data || error.message);
      alert(
        "Signin failed: " +
          (error.response?.data?.message || "Please try again."),
      );
    }
  }
  return (
    <div className="min-h-screen w-full bg-[#0b0c10] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,77,255,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(45,93,97,0.25),_transparent_55%)]" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#12151c]/90 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#1c1f27] flex items-center justify-center text-violet-300">
            <LogoIcon />
          </div>
          <div>
            <div className="font-display text-2xl">Brainly</div>
            <div className="text-xs text-white/50">Second Brain</div>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-sm text-white/50">Sign in</div>
          <div className="font-display text-2xl">Access your digital mind</div>
        </div>

        <div className="mt-6 space-y-3">
          <Input placeholder="Email address" ref={usernameRef} />
          <Input placeholder="Password" ref={passwordRef} />
        </div>

        <div className="mt-6">
          <Button
            variant="primary"
            text="Proceed to Brain"
            fullWidth
            onClick={signin}
            loading={false}
          />
        </div>

        <div className="mt-6 text-center text-xs text-white/50">
          New to Brainly?{" "}
          <span className="text-violet-300">Create an account</span>
        </div>
      </div>
    </div>
  );
}
