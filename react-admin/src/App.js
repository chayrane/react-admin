import React, { lazy, Suspense } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const Topbar = lazy(() => import("./scenes/global/Topbar"));
const Sidebar = lazy(() => import("./scenes/global/Sidebar"));
const Dashboard = lazy(() => import("./scenes/dashboard"));
const Team = lazy(() => import("./scenes/team"));
const Contacts = lazy(() => import("./scenes/contacts"));
const Invoices = lazy(() => import("./scenes/invoices"));
const Form = lazy(() => import("./scenes/form"));
const Calendar = lazy(() => import("./scenes/calendar"));
const FAQ = lazy(() => import("./scenes/faq"));
const Bar = lazy(() => import("./scenes/bar"));
const Pie = lazy(() => import("./scenes/pie"));
const Line = lazy(() => import("./scenes/line"));
const Geography = lazy(() => import("./scenes/geography"));

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <div className="main-content">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />

                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />

                  <Route path="/form" element={<Form />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />

                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
