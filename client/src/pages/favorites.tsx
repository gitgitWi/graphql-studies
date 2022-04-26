import { useEffect } from 'react';

export function FavoritesPage() {
  useEffect(() => {
    document.title = `Favorites - WN`;
    return;
  });

  return (
    <div>
      <h1>My Favorites</h1>
    </div>
  );
}
