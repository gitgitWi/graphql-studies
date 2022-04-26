import { Pages } from './pages';

import { Text } from './components/atoms';
/** @todo templates 로 옮기기 */
import { FloatingButton } from './components/organisms';

export function App() {
  return (
    <>
      <Pages />
      <FloatingButton>
        <Text content="MENU" />
      </FloatingButton>
    </>
  );
}
