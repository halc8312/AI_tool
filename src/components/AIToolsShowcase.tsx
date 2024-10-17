import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchToolsStart, fetchToolsSuccess, fetchToolsFailure } from '../store/toolsSlice';
import { fetchTools } from '../api/tools';
// ... (他のimport文)

export default function AIToolsShowcase() {
  const dispatch = useDispatch();
  const { tools, loading, error } = useSelector((state: RootState) => state.tools);
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const loadTools = async () => {
      if (!token) return;
      dispatch(fetchToolsStart());
      try {
        const fetchedTools = await fetchTools();
        dispatch(fetchToolsSuccess(fetchedTools));
      } catch (error) {
        console.error('Failed to load tools:', error);
        dispatch(fetchToolsFailure('ツールの読み込みに失敗しました。再度お試しください。'));
      }
    };
    loadTools();
  }, [dispatch, token]);

  // ... (残りのコンポーネントコード)
}