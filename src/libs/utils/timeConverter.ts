export function timeConverter(UNIX_timestamp: number) {
    if (!UNIX_timestamp)
        return 'unknown time'

    const date = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return day + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
}