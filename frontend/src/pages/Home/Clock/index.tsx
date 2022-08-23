import * as React from "react";
import {useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import styles from "./style.scss";
import {View} from "./View";

export interface ClockStore {
    loaded: boolean;
    time: Date;
}

export const Clock: React.FC = observer(() => {
    const store = useLocalObservable<ClockStore>(() => ({
        loaded: false,
        time: new Date()
    }));
    useEffect(() => {
        const timeEventSource = new EventSource("/api/time");
        timeEventSource.addEventListener("message", ({data}: MessageEvent<string>) => {
            const time = new Date(Number(data));
            runInAction(() => {
                store.time = time;
            });
        });
        return () => timeEventSource.close();
    }, []);
    return (
        <div className={styles.clock}>
            <div className={styles.container}>
                <View time={store.time} />
                <time className={styles.time}>{store.time.toLocaleTimeString()}</time>
            </div>
        </div>
    );
});
