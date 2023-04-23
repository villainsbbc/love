import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Team } from "../pages/Team";
import { Member } from "../pages/Member";
import { Game } from "../pages/Game";
import { Schedule } from "../pages/Schedule";
import { SNS } from "../pages/Sns";
import { Attention } from "../pages/Attention";
import { Page404 } from "../pages/404";
import Layout from "../components/Layout";

export const Router = memo(() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/member" element={<Member />} />
            <Route path="/game" element={<Game />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sns" element={<SNS />} />
            <Route path="/attention" element={<Attention />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
});
