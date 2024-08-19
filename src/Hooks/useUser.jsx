import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';

export const useUser = () => {
    const { authInfo } = useContext(AuthContext);
    const { user } = authInfo;
  return user;
}
