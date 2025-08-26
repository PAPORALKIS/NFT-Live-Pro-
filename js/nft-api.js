// Sample API fetch (OpenSea simulation)
async function loadNFTData(){
  // Exemple: remplacer par fetch("https://api.opensea.io/api/v1/assets?...") pour données live
  const nftData = [
    {name:'Moonbirds',price:15,img:'images/nft1.png'},
    {name:'BAYC',price:70,img:'images/nft2.png'},
    {name:'Grails',price:50,img:'images/nft3.png'}
  ];
  const section2 = document.getElementById('section2');
  nftData.forEach(nft=>{
    const div = document.createElement('div');
    div.innerHTML=`<h4>${nft.name} - ${nft.price} ETH</h4><img src="${nft.img}" alt="${nft.name} NFT">`;
    section2.appendChild(div);
  });
}
loadNFTData();
