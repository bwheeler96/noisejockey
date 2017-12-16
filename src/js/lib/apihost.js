export default function apihost() {
    if (window.location.hostname == 'localhost') {
        return 'localhost:2727'
    } else {
        return 'noisejockey.com'
    }
}