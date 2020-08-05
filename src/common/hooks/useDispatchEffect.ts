import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Action} from 'redux';

interface ContentProvider {
  (): Action;
}

const useDispatchEffect = (fetchContent: ContentProvider) => {
  console.log('useDispatchEffects --> fetchContent :', fetchContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, []);
};

export {useDispatchEffect};
