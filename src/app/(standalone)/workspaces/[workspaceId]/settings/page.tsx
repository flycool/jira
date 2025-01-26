import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorkspaceIdSettingClient } from "./client";


const WorkspaceIdSettingPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  // if (!initialValues) {
  //   redirect(`/workspaces/${params.workspaceId}`);
  // }

  return <WorkspaceIdSettingClient />
};

export default WorkspaceIdSettingPage;
