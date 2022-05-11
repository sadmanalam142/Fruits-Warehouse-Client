import { useEffect, useState } from "react";

const useCollection = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const url = `https://protected-forest-05796.herokuapp.com/fruits`
        fetch(url)
            .then(res => res.json())
            .then(data => setCollections(data))
    }, [])
    return [collections, setCollections];
}

export default useCollection;