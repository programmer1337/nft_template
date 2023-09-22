import {useEffect, useState} from "react";
function useTimeout(cardTime) {
    const [finishTime] = useState(cardTime);
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        const diff = (finishTime - new Date()) / 1000;
        if (diff < 0) return
        setDiff([
            Math.floor(diff / 86400),
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ]);
    }, [tick, finishTime])

    useEffect(() => {
        const timerID = setInterval(() => setTick(!tick), 1000);
        return () => clearInterval(timerID);
    }, [tick])

    return {
        diffDays,
        diffH,
        diffM,
        diffS,
    }
}

export default useTimeout;