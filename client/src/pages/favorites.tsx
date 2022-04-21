import { useEffect } from 'react';

export function FavoritesPage() {
  useEffect(() => {
    document.title = `Favorites - WN`;
    return;
  });

  return (
    <main>
      <h1>My Favorites</h1>
    </main>
  );
}
