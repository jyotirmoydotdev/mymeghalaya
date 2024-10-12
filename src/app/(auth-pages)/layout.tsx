import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
    
    <div className="flex justify-center">
      <div className="min-h-[90vh] items-start sm:items-center grid gap-12">
        {children}
      </div>
    </div>
    
    </div>
  );
}