// Sample Chart.js for NFT Market
const ctx = document.createElement('canvas');
document.getElementById('section2').appendChild(ctx);
new Chart(ctx,{
  type:'line',
  data:{
    labels:['J-6','J-5','J-4','J-3','J-2','J-1','Aujourd’hui'],
    datasets:[
      {label:'Moonbirds', data:[12,13,14,13,14,15,15], borderColor:'#007bff', fill:false},
      {label:'BAYC', data:[65,66,68,69,70,71,70], borderColor:'#28a745', fill:false},
      {label:'Grails', data:[45,46,47,48,49,50,50], borderColor:'#ffc107', fill:false}
    ]
  },
  options:{responsive:true, plugins:{legend:{position:'bottom'}}, scales:{y:{beginAtZero:false}}}
});
