import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

import PageLayout from "@/layouts/main-layout";

const AboutPage = lazy(() => import("@/pages/about"));
const FAQPage = lazy(() => import("@/pages/faq"));
const Home = lazy(() => import("@/pages/home"));
const ShopPage = lazy(() => import("@/pages/shop"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

import { routes } from "@/config/routes";
import AppErrorBoundary from "./components/errors/app-error-boundary";

function App() {
  return (
    <main>
      <BrowserRouter>
        <AppErrorBoundary>
          <Routes>
            <Route element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path={routes.about} element={<AboutPage />} />
              <Route path={routes.faq} element={<FAQPage />} />
              <Route path={routes.shop} element={<ShopPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppErrorBoundary>
      </BrowserRouter>
    </main>
  );
}

export default App;
