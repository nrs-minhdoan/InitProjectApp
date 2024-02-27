import {useContext} from 'react';

import {CommonContext} from 'contexts/CommonContext';

export default function useCommon() {
  const context = useContext(CommonContext);

  if (!context) {
    throw new Error('Auth context hook is not used correctly');
  }

  return context;
}
