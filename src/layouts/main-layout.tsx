import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "@/components/header";
import SuspenseLoader from "@/components/loaders/suspense-loader";
import Footer from "@/components/footer";

export default function PageLayout() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="flex flex-col flex-grow pb-6 lg:pb-8 4xl:pb-9">
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
