const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-NbRpRPcJHb8StFb1AJW266Fy'}
  };
  
export const getData = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1', options)
    .then(response => response.json())
    .catch(err => console.error(err));
    console.log('🐱‍💻🐱‍💻🐱‍💻')
    return data
} 