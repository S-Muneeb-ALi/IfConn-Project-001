'use client';
import useAuthStore from '@/store/useAuthStore';
import { Card } from 'antd';
import React from 'react';





export default function UserName() {
  const { isAuthenticated, user } = useAuthStore();


  return (
    <div>
      {isAuthenticated ? (
        <Card>
          <p className='text-2xl text-center align-middle	 text-violet-400'>Welcome {user?.email}</p>
        </Card>
      ) : (
        <p> Please log in.</p>
      )}
    </div>

  )
}


// 'use client'

// import React from 'react';
// import useAuthStore from '@/store/useAuthStore';
// import { Card } from 'antd';

// export default function UserName() {
//   const { Authenticated, users } = useAuthStore();

//   return (
//     <div>
//       {Authenticated ? (
//         <Card>
//         <p className='text-3xl text-center text-violet-700 font-bold'>Welcome to {users?.email}!</p>
//         </Card>
//       ) : (
//         <p>Please log in.</p>
//       )}
//     </div>
//   );
// }

