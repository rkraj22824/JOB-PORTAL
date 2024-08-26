import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { setCompanies} from '@/redux/companySlice';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`, { withCredentials: true });
                console.log(res);
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                } else {
                    console.error('Failed to fetch jobs:', res.data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        
        fetchCompanies();
    
    }, []); 
    
};

export default useGetAllCompanies;
