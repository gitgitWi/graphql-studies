import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './home';
import { MyNotesPage } from './my-notes';
import { FavoritesPage } from './favorites';
import { paths } from './paths';

import styles from './styles.module.scss';

export function Pages() {
  return (
    <main className={styles.mainDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.myNotes} element={<MyNotesPage />} />
          ß<Route path={paths.favorites} element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
