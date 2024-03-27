import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true); // Set loading to true before fetching data
                const response = await fetch("https://drilled-tools.onrender.com/items");
                const data = await response.json();
                setItems(data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                setError(error);
                setLoading(false); // Set loading to false if there's an error
            }
        };

        fetchItems();
    }, [items]); // Empty dependency array to run the effect only once

    return [items, error, loading];
};

export default useItems;