// components/UserList.tsx
// import React from 'react';
// import { useUsers } from '../hooks/useUsers';

// const UserList: React.FC = () => {
//   const { users, loading, error, refetch } = useUsers();

//   if (loading) return <div>Loading users...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <button onClick={() => refetch()}>Refresh</button>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;   