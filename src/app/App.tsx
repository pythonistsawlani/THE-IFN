import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { MainLayout } from './components/layouts/MainLayout';
import { AuthLayout } from './components/layouts/AuthLayout';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/Dashboard';
import { Feed } from './pages/Feed';
import { CreatePost } from './pages/posts/CreatePost';
import { PostDetail } from './pages/posts/PostDetail';
import { Calendar } from './pages/Calendar';
import { Profile } from './pages/Profile';
import { Pipeline } from './pages/pipeline/Pipeline';
import { PipelineSubmit } from './pages/pipeline/PipelineSubmit';
import { PipelineDetail } from './pages/pipeline/PipelineDetail';
import { Problems } from './pages/Problems';
import { ProblemDetail } from './pages/problems/ProblemDetail';
import { TeamBoard } from './pages/TeamBoard';
import { TeamDetail } from './pages/teams/TeamDetail';
import { AutopsyLibrary } from './pages/AutopsyLibrary';
import { AutopsyDetail } from './pages/autopsy/AutopsyDetail';
import { AdminPanel } from './pages/admin/AdminPanel';
import { AdminTags } from './pages/admin/AdminTags';
import { AdminPipeline } from './pages/admin/AdminPipeline';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminModeration } from './pages/admin/AdminModeration';
import { Notifications } from './pages/Notifications';
import { Search } from './pages/Search';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/pipeline/submit" element={<PipelineSubmit />} />
          <Route path="/pipeline/:id" element={<PipelineDetail />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:id" element={<ProblemDetail />} />
          <Route path="/team-board" element={<TeamBoard />} />
          <Route path="/team-board/:id" element={<TeamDetail />} />
          <Route path="/autopsy" element={<AutopsyLibrary />} />
          <Route path="/autopsy/:id" element={<AutopsyDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/moderation" element={<AdminModeration />} />
          <Route path="/admin/tags" element={<AdminTags />} />
          <Route path="/admin/pipeline" element={<AdminPipeline />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
