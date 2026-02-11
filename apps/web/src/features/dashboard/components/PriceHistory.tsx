import PriceChart from "./PriceChart";
import PriceHistoryHeader from "./PriceHistoryHeader";

function PriceHistory() {
    return (
        <div className="lg:col-span-2 bg-surface rounded-xl p-8 border border-slate-100 dark:border-white/5 shadow-xl shadow-black/20">
            <PriceHistoryHeader />

            <PriceChart />
        </div>
    );
}

export default PriceHistory;
