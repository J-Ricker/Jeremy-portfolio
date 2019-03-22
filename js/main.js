var ctx = document.getElementById('myChart');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'REACT'],
        datasets: [{
            label: '',
            data: [90, 80, 80, 55, 50, 100, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],

        }]
    },
    options: {
        scales: {
            yAxes: [{
                barPercentage: 0.4,
                ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    fontStyle: 'bold',
                    fontColor: '#000',
                },
                gridLines: {
                    drawOnChartArea: false,
                    drawBorder: false,
                    
                }
            }],
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                    drawBorder: false
                },
                ticks: {
                    display: true
                }
            }]
        },
        legend: {
            display: false,
        }
    }
});


var copyEmailBtn = document.querySelector('.js-emailcopybtn');  
copyEmailBtn.addEventListener('click', function(event) {  
    // Select the email link anchor text  
    var emailLink = document.querySelector('.js-emaillink');  
    var range = document.createRange();  
    range.selectNode(emailLink);  
    window.getSelection().addRange(range);  

    try {  
        // Now that we've selected the anchor text, execute the copy command  
        var successful = document.execCommand('copy');  
        var msg = successful ? 'successful' : 'unsuccessful';  
        console.log('Copy email command was ' + msg);  
    } catch(err) {  
        console.log('Oops, unable to copy');  
    }  

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported  
    window.getSelection().removeAllRanges();  
});