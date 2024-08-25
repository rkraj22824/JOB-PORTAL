import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      
        const fetchJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
                console.log(res);
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    console.error('Failed to fetch jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        
        fetchJobs();
    
    }, []); 
    
};

export default useGetAllJobs;
