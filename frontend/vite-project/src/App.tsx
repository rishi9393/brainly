import Button from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { CreateContentModel } from "./components/CreateContentModel";

function App() {
  return (
    <div>
      <CreateContentModel open={true} />
      <div className="justify-end flex gap-4 mt-2">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
        <div className="mr-2">
          <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <Card
          title="Sample YouTube Video"
          link="https://www.youtube.com/watch?v=JUeIGphgmcU"
          type="youtube"
        />
        <Card
          title="twitter"
          link="https://twitter.com/eddiejaoude/status/2019970352412307854"
          type="twitter"
        />
      </div>
    </div>
  );
}

export default App;
