import { mockData } from "../data/mockData";
import CurrencyTicker from "./CurrencyTicker";

function MarketGrid() {
  const data = [...mockData];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.map((currency) => (
        <CurrencyTicker
          key={currency.pair}
          data={currency}
        />
      ))}
    </div>
  );
}

export default MarketGrid;
