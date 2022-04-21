import { useEffect } from 'react';

export function MyNotesPage() {
  useEffect(() => {
    document.title = `My Notes - WN`;
    return;
  });

  return (
    <main>
      <h1>My Notes</h1>
    </main>
  );
}
