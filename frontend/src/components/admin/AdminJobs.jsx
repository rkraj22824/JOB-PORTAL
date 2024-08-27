import React from 'react'
import AdminJobsTable from './AdminJobsTable';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import Navbar from '../shared/Navbar';


const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs