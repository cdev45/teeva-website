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
import Advisory from "./pages/Advisory";
import Methodology from "./pages/Methodology";
import Resources from "./pages/Resources";
import Wellness from "./pages/Wellness";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

// Service Pages
import FractionalCIO from "./pages/services/FractionalCIO";
import Cybersecurity from "./pages/services/Cybersecurity";
import AITransformation from "./pages/services/AITransformation";
import Compliance from "./pages/services/Compliance";
import GoToMarket from "./pages/services/GoToMarket";

// Legal Pages
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/advisory" component={Advisory} />
      <Route path="/advisory/fractional-cio" component={FractionalCIO} />
      <Route path="/advisory/cybersecurity" component={Cybersecurity} />
      <Route path="/advisory/ai-transformation" component={AITransformation} />
      <Route path="/advisory/compliance" component={Compliance} />
      <Route path="/advisory/go-to-market" component={GoToMarket} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/resources" component={Resources} />
      <Route path="/wellness" component={Wellness} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
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
