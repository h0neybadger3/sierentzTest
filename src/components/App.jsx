import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const HomeView = lazy(() => import('../views/HomeView'));
const PopupView = lazy(() => import('../views/PopupView'));

export default function App() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route path="/" exact element={<HomeView />}></Route>
        <Route path="/popup" element={<PopupView />}></Route>
      </Routes>
    </Suspense>
  );
}
