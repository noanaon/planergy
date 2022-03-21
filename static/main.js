// MAKE ROUNDED EDGES FOR PIE CHARTS
Chart.defaults.RoundedDoughnut    = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
        var ctx           = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs          = this.getMeta().data;
        Chart.helpers.each(arcs, function(arc, i) {
            arc.transition(easingDecimal).draw();

            var pArc   = arcs[i === 0 ? arcs.length - 1 : i - 1];
            var pColor = pArc._view.backgroundColor;

            var vm         = arc._view;
            var radius     = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness  = (vm.outerRadius - vm.innerRadius) / 2;
            var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            var angle      = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(vm.x, vm.y);

            ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = vm.backgroundColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
        });
    }
});


// EXAMPLE 1
var ctx1 = document.getElementById("pieChart1");
var pieChart1 = new Chart(ctx1, {
    type: 'RoundedDoughnut',
    options: {
        cutoutPercentage: 75,
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#000000',
                fontSize:20,
                usePointStyle: true,
            }
        },

    },
    data: {
        labels: [
            "Exploration",
            "Individuals",
            "Storage",
            "Survival"
        ],
        datasets: [
            {
                data: [250, 100, 100, 200],
                borderWidth: 0,
                backgroundColor: [
                    '#630505',
                    '#752e16',
                    "#8c3838",
                    "#d1885e"
                ],
                hoverBackgroundColor: [
                    '#453d38',
                    '#453d38',
                    "#453d38",
                    "#453d38"
                ]
            }]
        }
    });


// // EXAMPLE 2
// var ctx2 = document.getElementById("pieChart2");
// var pieChart2 = new Chart(ctx2, {
//     type: 'pie',
//     options: {
//         legend: {
//             position: 'left',
//             labels: {
//                 boxWidth: 10,
//                 fontStyle: 'italic',
//                 fontColor: '#aaa',
//                 usePointStyle: true,
//             }
//         },
//     },
//     data: {
//         labels: [
//             "First",
//             "Second",
//             "Third",
//             "Fourth"
//         ],
//         datasets: [
//             {
//                 data: [300, 50, 100, 80],
//                 borderWidth: 0,
//                 backgroundColor: [
//                     '#44b2d7',
//                     "#59c2e6",
//                     "#71d1f2",
//                     "#96e5ff"
//                 ],
//                 hoverBackgroundColor: [
//                     '#44b2d7',
//                     "#59c2e6",
//                     "#71d1f2",
//                     "#96e5ff"
//                 ]
//             }]
//         }
//     });



// EXAMPLE 3
var ctx3 = document.getElementById("pieChart3");
var pieChart3 = new Chart(ctx3, {
    type: 'pie',
    options: {
        legend: {
            position: 'left',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            }
        },
    },
    data: {
        labels: [
            "First",
            "Second",
            "Third"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                borderWidth: 7,
                backgroundColor: [
                    '#46d8d5',
                    "#182390",
                    "#f5e132",
                ],
                hoverBackgroundColor: [
                    '#46d8d5',
                    "#182390",
                    "#f5e132",
                ]
            }]
        }
    });



// EXAMPLE 4
var ctx4 = document.getElementById("pieChart4");
var pieChart4 = new Chart(ctx4, {
    type: 'RoundedDoughnut',
    options: {
        cutoutPercentage: 70,
        legend: {
            position: 'left',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            }
        },

    },
    data: {
        labels: [
            "First",
            "Second",
            "Third",
            "Fourth"
        ],
        datasets: [
            {
                data: [250, 100, 100, 200],
                borderWidth: 5,
                backgroundColor: [
                    '#615dff',
                    '#ffb0d0',
                    "#ff8bb9",
                    "#f8f8fa"
                    ],
                    hoverBackgroundColor: [
                        '#615dff',
                        '#ffb0d0',
                        "#ff8bb9",
                        "#f8f8fa"
                    ]
                }]
            }
        });


// EXAMPLE 5
var ctx5 = document.getElementById("pieChart5");
var pieChart5 = new Chart(ctx5, {
    type: 'pie',
    options: {
        cutoutPercentage: 50,
        legend: {
            position: 'left',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            }
        },
    },
    data: {
        labels: [
            "First",
            "Second",
        ],
        datasets: [
            {
                data: [300, 50],
                borderWidth: 2,
                borderColor: [
                    '#46d8d5',
                    "#f5e132",
                ],
                backgroundColor: [
                    'rgba(70, 215, 212, 0.22)',
                    "rgba(245, 225, 50, 0.23)",
                ],
                hoverBackgroundColor: [
                    '#46d8d5',
                    "#f5e132",
                ]
            }]
        }
    });



// EXAMPLE 6
var ctx6 = document.getElementById("pieChart6");
var pieChart6 = new Chart(ctx6, {
    type: 'pie',
    options: {
        rotation: -20,
        cutoutPercentage: 10,
        animation: {
            animateScale: true,
        },
        legend: {
            position: 'left',
            borderAlign: 'inner',
            labels: {
                boxWidth: 10,
                fontStyle: 'italic',
                fontColor: '#aaa',
                usePointStyle: true,
            }
        },
    },
    data: {
        labels: [
            "First",
            "Second",
        ],
        datasets: [
            {
                data: [300, 120],
                borderWidth: 2,
                backgroundColor: [
                    'rgba(70, 215, 212, 0.2)',
                    "rgba(245, 225, 50, 0.2)",
                ],
                borderColor: [
                    '#46d8d5',
                    "#f5e132",
                ],
                hoverBackgroundColor: [
                    '#46d8d5',
                    "#f5e132",
                ]
            }]
        }
    });



// EXAMPLE 7
var ctx7 = document.getElementById("pieChart7").getContext('2d');
    var pieChart7 = new Chart(ctx7, {
    type: 'RoundedDoughnut',
    options: {
        cutoutPercentage: 92,
        borderAlign: 'center',
        animation: {
            duration: 2000,
            easing: 'linear'
        },
        legend: {
            position: 'top',
            labels: {
                padding: 10,
                fontStyle: 'italic',
                fontColor: '#333',
                usePointStyle: true,
            }
        },
    },
    data: {
        labels: [
            "First",
            "Second",
            "Third",
            "Fourth",
        ],
        datasets: [
            {
                data: [120, 50, 80, 140],
                borderWidth: 6,
                borderColor: '#fff',
                backgroundColor: [
                    '#f9d65c',
                    "#a9d876",
                    "#39be83",
                    "#0e8a73",
                ],
                hoverBackgroundColor: [
                    '#f9d65c',
                    "#a9d876",
                    "#39be83",
                    "#0e8a73",
                ]
            }]
        },
    });


