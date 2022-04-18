import { useState, useEffect } from 'react';
import axios from "axios";

// custom hook to fetch API with axios

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    useEffect(() => {
        
        const srch = async () => {
            setLoading(true)
            try {

                const dta = await axios.get(url, { cancelToken: source.token })
                setData(dta.data.hits)
                    setLoading(false)
                    setError(null)
            }
            catch (error) {
                setLoading(false)
                if (axios.isCancel(error)) {
                    return "axios request cancelled";
                }
                setError(error);     
            }
        }
        
        srch();
    }, [url])
    console.log(data)
    return [data, loading, error];
    
}


export default useFetch