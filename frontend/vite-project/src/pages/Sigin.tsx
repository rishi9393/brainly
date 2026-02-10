import Button from "../components/Button";
import { Input } from "../components/Input";

export function Sigin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md min-w-48 flex flex-col p-8">
        <Input placeholder="Username" onChange={() => {}} />
        <Input placeholder="Password" onChange={() => {}} />
        <div className="justify-center flex mt-4">
          <Button
            variant="primary"
            text="Sign In"
            fullWidth
            onClick={() => {}}
            loading={false}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
