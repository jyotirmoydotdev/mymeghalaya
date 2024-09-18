import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center bg-sky-50">
      <div className="h-[90vh] items-center grid gap-12">
        {children}
      </div>
    </div>
    <Footer/>
    </>
  );
}
