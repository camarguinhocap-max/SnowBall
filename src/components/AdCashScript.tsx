'use client';
import Script from 'next/script';

export default function AdCashScript() {
    return (
        <Script
            id="aclib"
            src="//acscdn.com/script/aclib.js"
            strategy="afterInteractive"
            onLoad={() => {
                if (typeof (window as any).aclib !== 'undefined') {
                    (window as any).aclib.runAutoTag({ zoneId: 'zzqa9yg6x4' });
                }
            }}
        />
    );
}
