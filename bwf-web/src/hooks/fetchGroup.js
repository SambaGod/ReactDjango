import { useState, useEffect } from 'react';
import { getGroup } from '../services/groupServices';

export function useFetchGroup(groupId){
    const [group, setGroup] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const getData = async () => {
        setLoading(true);
        const data = await getGroup(groupId);
        setGroup(data);
        setLoading(false);
      }
      getData();
    }, [groupId]);

    return [group, loading, error]
}