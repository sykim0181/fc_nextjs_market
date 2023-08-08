import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getCurrentUser from '../actions/getCurrentUser';

const UserPage = async () => {
  
  const userData = await getCurrentUser();
  console.log('userData', userData)

  return (
    <div>로그인된 유저만 볼 수 있는 페이지입니다.</div>
  )
}

export default UserPage;