import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './appRoutes';

export default function AppRouter({ onOpenBooking }) {
  return (
    <Routes>
      {appRoutes.map((route) => {
        const Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Component onOpenBooking={onOpenBooking} />}
          />
        );
      })}
    </Routes>
  );
}
