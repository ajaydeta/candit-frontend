import moment from "moment";

export default function useFormatDate(timestamp) {
    if (timestamp.length < 13) {
        timestamp = timestamp * 1000
    }

    const stamp = moment(timestamp).locale('id');
    const now = moment(moment.now())

    if (stamp.diff(now, 'seconds') >= -18000) {
        return stamp.from(now)
    } else if (stamp.diff(now, 'days') >= -1) {
        return stamp.calendar(now)
    }

    return stamp.format("DD MMMM YYYY, HH:mm:ss")
}