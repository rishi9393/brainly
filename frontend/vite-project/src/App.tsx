import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/plus";

const App = () => {
  return (
    <>
      <div className="flex">
        <div className="pl-2 pr-2 ">
          <Button
            startIcon={<PlusIcon size={"lg"} />}
            variant="primary"
            text="Share"
            size="md"
          />
        </div>
        <div className="pl-2 pr-2 ">
          <Button variant="secondary" text="Learn More" size="md" />
        </div>
        <div className="pl-2 pr-2 ">
          <Button variant="secondary" text="Learn More" size="lg" />
        </div>
      </div>
    </>
  );
};

export default App;
