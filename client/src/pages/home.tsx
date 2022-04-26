import { LinkButton } from '../components/molecules';
import { paths } from './paths';

export function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>

      <LinkButton content="MyNotes" href={paths.myNotes} />
      <LinkButton content="Favorites" href={paths.favorites} />
    </div>
  );
}
