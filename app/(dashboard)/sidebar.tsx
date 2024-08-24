import { useSidebarContext } from "@/context/SidebarContext";
import { Avatar, Sidebar } from "flowbite-react";
import type { FC } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight, HiCalendar,
  HiChartPie, HiChat, HiHashtag, HiHome,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex ",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiHashtag}>
            Channels
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Playbooks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChat}>
            Discussion
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCalendar}>
            Calendar
          </Sidebar.Item>

        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>



          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>

        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Erica's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Suzie's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Suzie's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Suzie's playbook
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={() => (
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              rounded={true}
              size="xs" // Adjust size as needed
            />
          )}>
            Suzie's playbook
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
