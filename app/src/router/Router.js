import { memo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Team } from "../pages/Team";
import { Member } from "../pages/Member";
import { Game } from "../pages/Game";
import { Schedule } from "../pages/Schedule";
import { SNS } from "../pages/Sns";

export const Router = memo(() => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/member" element={<Member />} />
        <Route path="/game" element={<Game />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sns" element={<SNS />} />
      </Routes>
    </BrowserRouter>
    </>
  );
});