export default function useRupiah(num) {
    var reverse = num
        .toString()
        .split("")
        .reverse()
        .join("");
    var rupiahRegex = reverse.match(/\d{1,3}/g);
    var rupiahString = rupiahRegex
        .join(".")
        .split("")
        .reverse()
        .join("");
    return "Rp " + rupiahString + ",-";
}
