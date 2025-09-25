import { useEffect, useState } from "react";

export function useEventSource<T>(url: string, def: T) {

    const [data, setData] = useState<T>(def);
    const [error, setError] = useState<unknown | undefined>();

    useEffect(() => {
        const gameEvents = new EventSource(url);

        gameEvents.addEventListener("message", (msg) => {
            try {
                setData(JSON.parse(msg.data));
            } catch (e) {
                setError(e)
            }
        });

        gameEvents.addEventListener("error", (e) => {
            setError(e);
        });
        return () => gameEvents.close()
    }, [url]);

    return { data, error }
}