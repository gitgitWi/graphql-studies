import { useEffect } from 'react';

export function MyNotesPage() {
  useEffect(() => {
    document.title = `My Notes - WN`;
    return;
  });

  return (
    <div>
      <h1>My Notes</h1>
    </div>
  );
}
