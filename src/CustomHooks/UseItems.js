import { useEffect, useState } from "react";

const useItems = id => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruits(data))
    }, [id]);
    return [fruits, setFruits];
}

export default useItems;