import SidebarAdmin from "@/components/layout/admin/Sidebar";
import React, { ReactNode } from "react";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SidebarAdmin>
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {children}
        </div>
      </SidebarAdmin>
    </main>
  );
};

export default LayoutAdmin;
