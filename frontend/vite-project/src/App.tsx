import Button from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
      <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
      <Card
        title="Sample YouTube Video"
        link="https://www.youtube.com/watch?v=JUeIGphgmcU"
        type="youtube"
      />
    </div>
  );
}

export default App;
