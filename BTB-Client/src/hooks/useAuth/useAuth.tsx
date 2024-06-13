import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setAuthState } from '../../store/slice/AuthSlice';

export const useAuth = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch<AppDispatch>();

  const setIsAuth = (isAuth: boolean) => {
    dispatch(setAuthState(isAuth));
  };

  return { isAuth, setIsAuth };
};
