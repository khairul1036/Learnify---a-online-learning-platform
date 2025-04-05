import Sidebar from "@/components/Sidebar";

// DashboardLayout using Tailwind CSS
export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
      <div className="flex">
        {/* Sidebar */}
        <aside className="lg:w-64">
          <Sidebar/>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 mt-20 lg:mt-5 mx-5">
          <section>
            {children}
          </section>
        </main>
      </div>
    );
  }
  