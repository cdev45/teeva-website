/*
 * TEEVA App Router — v5 Commercial Growth OS Architecture
 * Routes: Community (Insights, Resources, Wellness, Join) + OS Product + Leadership + Contact + Legal
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

// Pages
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import InsightArticleDetail from "./pages/InsightArticleDetail";
import Resources from "./pages/Resources";
import Wellness from "./pages/Wellness";
import WellnessArticles from "./pages/articles/WellnessArticles";
import WellnessArticleDetail from "./pages/articles/WellnessArticleDetail";
import Join from "./pages/Join";

// OS Product Pages
import CommercialGrowthOS from "./pages/os/CommercialGrowthOS";
import FoundationOS from "./pages/os/FoundationOS";
import GrowthOS from "./pages/os/GrowthOS";
import EnterpriseOS from "./pages/os/EnterpriseOS";

// Other Pages
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={Home} />

      {/* Community */}
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={InsightArticleDetail} />
      <Route path="/resources" component={Resources} />
      <Route path="/wellness" component={Wellness} />
      <Route path="/wellness/articles" component={WellnessArticles} />
      <Route path="/wellness/articles/:slug" component={WellnessArticleDetail} />
      <Route path="/join" component={Join} />

      {/* Commercial Growth OS */}
      <Route path="/os" component={CommercialGrowthOS} />
      <Route path="/os/foundation" component={FoundationOS} />
      <Route path="/os/growth" component={GrowthOS} />
      <Route path="/os/enterprise" component={EnterpriseOS} />

      {/* Company */}
      <Route path="/leadership" component={Leadership} />
      <Route path="/contact" component={Contact} />

      {/* Legal */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />

      {/* Legacy redirects — old advisory routes now 404 gracefully */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
