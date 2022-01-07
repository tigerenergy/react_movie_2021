import {useState, useEffect} from 'react'


function App()
{
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(()=>
  {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response)=>response.json())
    .then((json)=> 
    setCoins(json))
    setLoading(false)
  },[])

  console.log(coins)
  return(
    <div>
      <h1>The Coins(총:{coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin)=>
        <li>
          {coin.name}
          ({coin.symbol})
          {Math.round(coin.quotes.USD.price)}$
          </li>)}
      </ul>
    </div>
  )
}


export default App
