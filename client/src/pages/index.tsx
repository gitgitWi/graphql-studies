import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './home';
import { MyNotesPage } from './my-notes';
import { FavoritesPage } from './favorites';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mynotes" element={<MyNotesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
