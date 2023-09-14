import { useEffect, useState } from 'react'
import coinChallenge from './CoinChallenge.module.css'

function CoinTrackerChallengeApp() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(100) // `https://api.coinpaprika.com/v1/tickers?limit=${limit}&&quotes=KRW`
  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetch(`https://api.coinpaprika.com/v1/tickers?limit=${limit}&&quotes=KRW`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json)
    //       setCoins(json)
    //       setLoading(false)
    //       console.log('1')
    //     })
    // }, 1000)
    // return () => clearInterval(interval)
    fetch(`https://api.coinpaprika.com/v1/tickers?limit=${limit}&&quotes=KRW`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setCoins(json)
        setLoading(false)
        console.log('1')
      })
  }, [limit])

  const onClick = () => {
    setLimit((current) => current + 100)
  }

  const onChange = () => {}

  return (
    <div>
      <div className={coinChallenge.title}>
        <h1>Cryptocurrency in real time!</h1>
      </div>
      <div className={coinChallenge.search}>
        <form>
          <input
            type="text"
            placeholder="search Cryptocurrency"
            onChange={onChange}
          ></input>
        </form>
        {loading ? <strong>Loding...</strong> : null}
      </div>
      <hr></hr>
      <div className={coinChallenge.tablecontainer}>
        <table>
          <thead>
            <tr>
              <th>순위</th>
              <th>종목</th>
              <th>기호</th>
              <th>가격(KRW)</th>
              <th>총시가</th>
              <th>거래량(24H)</th>
              <th>변동(24H)</th>
              <th>변동(7D)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coins) => (
              <tr key={coins.id}>
                <td className={coinChallenge.rank}>{coins.rank}</td>
                <td className={coinChallenge.dataColorWhite}>
                  {coins.name.toUpperCase()}
                </td>
                <td className={coinChallenge.dataColorWhite}>{coins.symbol}</td>
                <td className={coinChallenge.dataColorWhite}>
                  {parseFloat(
                    coins.quotes.KRW.price.toFixed(3),
                  ).toLocaleString() + '원'}
                </td>
                <td className={coinChallenge.dataColorWhite}>
                  {parseFloat(
                    coins.quotes.KRW.ath_price.toFixed(3),
                  ).toLocaleString() + '원'}
                </td>
                <td className={coinChallenge.dataColorWhite}>
                  {parseFloat(
                    coins.quotes.KRW.volume_24h.toFixed(3),
                  ).toLocaleString() + '개'}
                </td>
                <td
                  className={
                    parseFloat(coins.quotes.KRW.percent_change_24h) < 0
                      ? coinChallenge.dataColorRed
                      : coinChallenge.dataColorBlue
                  }
                >
                  {parseFloat(
                    coins.quotes.KRW.percent_change_24h.toFixed(3),
                  ).toLocaleString()}
                </td>
                <td
                  className={
                    parseFloat(coins.quotes.KRW.percent_change_7d) < 0
                      ? coinChallenge.dataColorRed
                      : coinChallenge.dataColorBlue
                  }
                >
                  {parseFloat(
                    coins.quotes.KRW.percent_change_7d.toFixed(3),
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={coinChallenge.moreBtndiv}>
        <button className={coinChallenge.moreBtn} onClick={onClick}>
          {loading ? <strong>Loding...</strong> : '더 보기'}
        </button>
      </div>
    </div>
  )
}

export default CoinTrackerChallengeApp
