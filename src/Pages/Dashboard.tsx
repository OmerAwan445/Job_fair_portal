import React, { useContext } from 'react'
import { AppContext } from '../DataLayer/DataProviders/AppProvider';

function Dashboard() {
    const [{ token },] = useContext(AppContext);
    console.log(token);
  return (
    <div>
      <h1>Welcome to DashBoard</h1>
    </div>
  )
}

export default Dashboard
