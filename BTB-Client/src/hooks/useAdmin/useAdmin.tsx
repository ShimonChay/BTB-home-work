import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setAdminState } from '../../store/slice/AdminSlice';

export const useAdmin = () => {
  const isAdmin = useSelector((state: RootState) => state.admin.isAdmin);
  const dispatch = useDispatch<AppDispatch>();

  const setIsAdmin = (isAdmin: boolean) => {
    dispatch(setAdminState(isAdmin));
  };

  return { isAdmin, setIsAdmin };
};
