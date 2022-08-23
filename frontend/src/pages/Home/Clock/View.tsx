import * as React from "react";
import {useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import styles from "./style.scss";

export interface ViewStore {
    hoursDeg: number;
    minutesDeg: number;
    secondsDeg: number;
}

export interface ViewProps {
    time: Date;
}

export const View: React.FC<ViewProps> = observer(({time}) => {
    const store = useLocalObservable<ViewStore>(() => ({
        hoursDeg: -1,
        minutesDeg: -1,
        secondsDeg: -1
    }));
    const hoursStyle: Record<string, string> = {};
    if (store.hoursDeg !== -1) hoursStyle["--deg"] = store.hoursDeg + "deg";
    const minutesStyle: Record<string, string> = {};
    if (store.minutesDeg !== -1) minutesStyle["--deg"] = store.minutesDeg + "deg";
    const secondsStyle: Record<string, string> = {};
    if (store.secondsDeg !== -1) secondsStyle["--deg"] = store.secondsDeg + "deg";
    useEffect(() => {
        runInAction(() => {
            store.hoursDeg = 180 + (360 / 12) * (time.getHours() % 12) + time.getMinutes() / 60;
            store.minutesDeg = 180 + (360 / 60) * time.getMinutes();
            store.secondsDeg = 180 + (360 / 60) * time.getSeconds();
        });
    }, [time]);
    return (
        <svg className={styles.view} viewBox="0 0 36 36">
            <circle className={styles.border} cx="18" cy="18" r="18" />
            <circle className={styles.background} cx="18" cy="18" r="14" />
            <line className={styles.hours} style={hoursStyle} x1="0" y1="0" x2="0" y2="8" />
            <line className={styles.minutes} style={minutesStyle} x1="0" y1="0" x2="0" y2="12" />
            <line className={styles.seconds} style={secondsStyle} x1="0" y1="0" x2="0" y2="12" />
        </svg>
    );
});
