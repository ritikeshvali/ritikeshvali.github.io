import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

// To add a page later:
//   1. make src/pages/Notes.jsx (or whatever)
//   2. import it here
//   3. add <Route path="/notes" element={<Notes />} />
// Clean-URL deep links already work on GitHub Pages thanks to public/404.html.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
