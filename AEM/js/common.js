(async () => {

    // Load the dataset
    const data = await fetch(
        'js/AEM.json'
    ).then(response => response.json());
const date = 1729036800000;
    // Create the chart
    Highcharts.stockChart('RegnStockChart', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AEM Stock Price',
			style: {
                    fontFamily: 'Poppins',
                },
        },
		credits: {
			 enabled: false
		},
		exporting: {
			 enabled: false
		},
        subtitle: {
            text: ''
        },

        scrollbar: {
            barBorderRadius: 0,
            barBorderWidth: 1,
            buttonsEnabled: true,
            height: 14,
            margin: 0,
            rifleColor: '#333',
            trackBackgroundColor: '#f2f2f2',
            trackBorderRadius: 0
        },

        series: [{
            name: 'AEM Stock Price',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        },{
    type: 'scatter',
    data: [{
		name:'Dividend',
      x: date + 2 * 24 * 60 * 60 * 1000,
      y: 80,
	
      marker: {
        symbol: '$'
      }
    }],
	      tooltip: {
			useHTML: true,
			formatter: function () {
				console.log(this); // just to see , what data you can access
				return 'Dividend declared' + this.x +
					'</b> is <b>' + this.y + '</b>';
			}
    },
  }]
    });
})();