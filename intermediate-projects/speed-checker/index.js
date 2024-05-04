const resultDiv = document.getElementById('result');


function calculateDownloadSpeed(transferSize, startTime, endTime){
    const duration = (endTime - startTime) / 1000;
    const bitsLoaded = transferSize * 8;
    const speedBps = (bitsLoaded / duration).toFixed(2);
    const speedKbps = (speedBps / 1000).toFixed(2);
    const speedMbps = (speedKbps / 1000).toFixed(2);
    return `Download Speed: ${speedMbps} Mbps`;
}


function performSpeedTest() {
    const url = "https://example.com/large-file.jpg";
    const fetchStart = performance.now();

    fetch(url)
    .then(response => {
        const fetchEnd = performance.now();
        console.log(response)
        const transferSize = parseInt(response.headers.get('Content-Length'), 10);
        const result = calculateDownloadSpeed(transferSize, fetchStart, fetchEnd);
        resultDiv.textContent = result;
    })
    .catch(error => {
        resultDiv.textContent = 'Error:' + error.message;
    })
}

window.addEventListener('load', performSpeedTest)