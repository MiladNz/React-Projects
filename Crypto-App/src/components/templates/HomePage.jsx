import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&x_cg_demo_api_key=CG-D5vzo4bpbwxtE2KhurRzimV4"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
