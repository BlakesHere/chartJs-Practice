const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6'],
    datasets: [{
      label: 'dataset',
      data: [12, 19, 3, 5, 2, 3],
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart2(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 9, 3, 5, 12, 3],
      borderWidth: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




// const ctx = document.getElementById('myChart');

// const labels = ["label1", "labe3", "label3"]


// let theChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 10
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// console.log("js working")