import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import Wrapper from "./components/Wrapper";
import { MyPlaylistPage } from "./pages/MyPlaylist";
import { RecentlyPlayedPage } from "./pages/RecentlyPlayed";
import { SearchPage } from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<Wrapper />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-playlist" element={<MyPlaylistPage />} />
        <Route path="/recently-played" element={<RecentlyPlayedPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}
export default App;
