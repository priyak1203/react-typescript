import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
// import type { TypedUseSelectorHook } from 'react-redux';

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
