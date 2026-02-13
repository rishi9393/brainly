import Button from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { CreateContentModel } from "../components/CreateContentModel";
import { use, useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useCotent } from "../hooks/useContent";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents, refresh} = useCotent();

  useEffect(() => {
    refresh();
  }, [modelOpen])

  return (
    <div className="border-gray-200">
      <div className="">
        <Sidebar />
      </div>
      <div className="ml-72 min-h-screen p-4 bg-gray-200 border-b border-gray-100">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className="justify-end flex gap-4 mt-2 ">
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => {
              setModelOpen(true);
            }}
          />
          <div className="mr-2 ">
            <Button
              variant="secondary"
              text="Share"
              startIcon={<ShareIcon />}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap">
            {contents.map(({ link, title, type }) => {
              return <Card type={type} title={title} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
