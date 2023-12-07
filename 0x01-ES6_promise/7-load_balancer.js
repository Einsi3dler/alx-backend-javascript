export default function loadBalancer(chinaDownload, USDownload) {
    const race = Promise.race([chinaDownload, USDownload])
    .then((value)=> {
        return (value)
    });

    return race
}