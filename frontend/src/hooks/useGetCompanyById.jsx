import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllJobs } from '@/redux/jobSlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { setSingleCompany } from '@/redux/companySlice';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
      
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                } else {
                    console.error('Failed to fetch jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        
        fetchSingleCompany();
    
    }, [companyId,dispatch]); 
    
};

export default useGetCompanyById;
