import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import LeadDetails from "./pages/LeadDetails";
import Meetings from "./pages/Meetings";
import Projects from "./pages/Projects";
import Quotations from "./pages/Quotations";
import Tasks from "./pages/Tasks";
import Layouts from "./pages/Layouts";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/lead-details" element={<LeadDetails />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/quotations" element={<Quotations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/layouts" element={<Layouts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;