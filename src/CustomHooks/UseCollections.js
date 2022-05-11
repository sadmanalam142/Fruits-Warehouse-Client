import { useEffect, useState } from "react";

const useCollection = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/fruits`
        fetch(url)
            .then(res => res.json())
            .then(data => setCollections(data))
    }, [])
    return [collections, setCollections];
}

export default useCollection;