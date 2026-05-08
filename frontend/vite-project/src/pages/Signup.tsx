import Button from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/logoIcon";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });
      navigate("/signin");
    } catch (error) {
      alert("Signup failed. Please try again.");
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
          <div className="text-sm text-white/50">Create account</div>
          <div className="font-display text-2xl">
            Join the cognitive workspace
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Input ref={usernameRef} placeholder="Email address" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>

        <div className="mt-6">
          <Button
            variant="primary"
            text="Create Brain"
            fullWidth
            onClick={signup}
            loading={false}
          />
        </div>

        <div className="mt-6 text-center text-xs text-white/50">
          Already have an account?{" "}
          <span className="text-violet-300">Sign in</span>
        </div>
      </div>
    </div>
  );
}
