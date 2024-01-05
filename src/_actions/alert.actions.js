import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { alertAtom } from '../_state/alert';

function useAlertActions() {
  const setAlert = useSetRecoilState(alertAtom);
  const resetAlert = useResetRecoilState(alertAtom);

  return {
    error: (title, response, message, request) => {
      setAlert({
        error: {
          title: title || 'An error has occurred',
          response,
          message,
          request,
        },
        type: 'error',
      });
    },
    clear: resetAlert,
  };
}

export { useAlertActions };
