import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { VideoDetail } from "./components/VideoDetail";
import { Feed } from "@mui/icons-material";
import { ChannelDetail } from "./components/ChannelDetail";
import { SearchFeed } from "./components/SearchFeed";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetailail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
