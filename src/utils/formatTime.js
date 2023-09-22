export default function formatTime(hh, mm, ss) {
    if (hh < 10) hh = '0' + hh;

    if (mm < 10) mm = '0' + mm;

    if (ss < 10) ss = '0' + ss;

    return hh + ':' + mm + ':' + ss;
}