import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/dashboard/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="lg:flex h-screen">
      {/* Fixed Sidebar */}
      
        <Sidebar />


      <div className="lg:flex flex-col w-full lg:ml-64">
        {/* Fixed Navbar */}
        <nav className="fixed top-0 w-full z-1">
          <Navbar />
        </nav>

        {/* Main Content */}
        <main className="mt-30 lg:mt-20 p-5 w-full flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
}
