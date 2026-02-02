import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/plus";

const App = () => {
  return (
    <>
      <Button
        startIcon= {<PlusIcon />}
        variant="primary"
        text="Share"
        size="sm"
      />
      <Button variant="secondary" text="Learn More" size="md" />
      <Button variant="secondary" text="Learn More" size="lg" />
    </>
  );
};

export default App;
