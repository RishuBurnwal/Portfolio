import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";

function App() {
  return (
    <TooltipProvider>
      <Index />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
