'use client';
import Script from 'next/script';

export default function AdCashScript() {
    const initAutoTag = () => {
        const tryRun = (attempts = 0) => {
            const aclib = (window as any).aclib;
            if (typeof aclib?.runAutoTag === 'function') {
                aclib.runAutoTag({ zoneId: 'zzqa9yg6x4' });
            } else if (attempts < 30) {
                setTimeout(() => tryRun(attempts + 1), 200);
            }
        };
        tryRun();
    };

    return (
        <Script
            id="aclib"
            src="//acscdn.com/script/aclib.js"
            strategy="afterInteractive"
            onLoad={initAutoTag}
        />
    );
}
