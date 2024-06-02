import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart,
    LayoutDashboard,
    Settings
  } from "lucide-react";
  import Sidebar, { SidebarItem } from "./Sidebar";
  
  const SideNavComponent = () => {
    return (
      <main className="">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<BarChart size={20} />} text="Statistics" />
          <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
          <SidebarItem icon={<Package size={20} />} text="Orders" />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings"  alert />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </main>
    );
  };
  
  export default SideNavComponent;
  