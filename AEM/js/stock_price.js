    (async () => {

        const data = await fetch(
                'js/AEM.json'
        ).then(response => response.json());
    Highcharts.stockChart('SampleChartIAC-5', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AEM Stock Price'
        },
 credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
        series: [{
            name: 'AEM',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
    })();