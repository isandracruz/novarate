
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
  /*return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-surface-dark rounded-xl p-6 border border-white/5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
              <img alt="EU Flag" className="relative w-12 h-12 rounded-full object-cover border border-blue-400/30 icon-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pfBVI0xJ4GK5H4fgprkSW2FJYbjmgYU80xmskVFNRTH0FdtrQowvmCXDlZLzqTrtZOZM6IlqY5PAppubMiqbiPbwsdxjKJbSMWpN2cz1Du6AUZ_qNStYk8tWEl8pH0Tp2pwKurX9PKnut0zq0JRfV1aRa7uz8PVO1QZC51ohgMZeRyjf6UjRcV_qYBsrNkRMBIt7qVfGGAhMmcier75VsSWS_5ql3_c6mskgi13mkOAeankGRXMtoT_O9N06d52BdrqFJMNFLd0" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-display">EUR / USD</h3>
              <p className="text-xs text-slate-400 mt-0.5">Euro</p>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white">
            <span className="material-icons-round">more_horiz</span>
          </button>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-display font-bold text-white">1.0924</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold flex items-center">
            <span className="material-icons-round text-sm mr-0.5">trending_up</span>
            +0.45%
          </span>
          <span className="text-xs text-slate-500">vs yesterday</span>
        </div>
      </div>
      <div className="bg-surface-dark rounded-xl p-6 border border-white/5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md"></div>
              <img alt="UK Flag" className="relative w-12 h-12 rounded-full object-cover border border-indigo-400/30 icon-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEe84Nkua1PemyHyBJp4xlDnSgBPZyV0Z83RD2qFXATqfEmR73PAKxKMvXAEt2ETqBlRZrm5PIeTrPzj7UEfUnRDslgyeMR_UqhrMudh8EJFlEwcjMm9l6koAhNWXagYzPgCSxcgWJiqES4c-xYbzaXez7_LMc1L20FaxFypMB5SHiNdcc5XPfqIqhF5YV5iepB3NYqXkqDoh2XfX2FdmJCu-cVUwL_K6GDOtmI8FU-ipiHH6OdFuzbr4mCT5M9fXb_ZEkitvwOrw" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-display">GBP / USD</h3>
              <p className="text-xs text-slate-400 mt-0.5">British Pound</p>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white">
            <span className="material-icons-round">more_horiz</span>
          </button>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-display font-bold text-white">1.2710</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold flex items-center">
            <span className="material-icons-round text-sm mr-0.5">trending_down</span>
            -0.12%
          </span>
          <span className="text-xs text-slate-500">vs yesterday</span>
        </div>
      </div>
      <div className="bg-surface-dark rounded-xl p-6 border border-white/5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
              <img alt="Japan Flag" className="relative w-12 h-12 rounded-full object-cover border border-red-400/30 icon-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrydbaNc6k6DtRsujwAS0jtEtHMfFMCt9DAwr-RLTUOf1cNzbVPElO8sbTjm0ymelZj57zfFOFrg47WjV46rEuyG3CLz-nulukusKWy0MkD6Wth3rg5E2XGC0ZkU0VLV4H9o-Fzj62t35l9FwuG3R_gXr9FNKaxS2vayqCzk0lOZnuadN-m7Vt-w89ip-pUncKLyw2rPm-XHHZXyzmEVsfpdJjC-ass_8PY6uCz2WTUP49osYy4yp1kBZrXFrw7_6JnXdkvFolCTM" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-display">USD / JPY</h3>
              <p className="text-xs text-slate-400 mt-0.5">Japanese Yen</p>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white">
            <span className="material-icons-round">more_horiz</span>
          </button>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-display font-bold text-white">149.32</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold flex items-center">
            <span className="material-icons-round text-sm mr-0.5">trending_up</span>
            +0.89%
          </span>
          <span className="text-xs text-slate-500">vs yesterday</span>
        </div>
      </div>
      <div className="bg-surface-dark rounded-xl p-6 border border-white/5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
              <img alt="AUD Flag" className="relative w-12 h-12 rounded-full object-cover border border-blue-400/30 icon-glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSpfI97DzLhlh-IOTRPsQ-ZpS8dR2rSdVYueyoNI3qfcRV7Kj6nNS_TC1VhfWms1QFWMiIlrzuvEJdMarZgBaS2eiGBD-dzcfrZ7NDJgYxiefXS5ddcdfLMmOqJfBHYDT7WBS41CGgEH8B-Qv3KByVNIjc6h4I8685qyYTm_F6-0-VNNC6cJC9H_d8V8mFgpu5Ce_6yz-_7XxlPVKxe5yyqfj7hv-_lbQdASooy9UogahlKpwhIYaOovUsWmPTZ2T7qonBKye9l0A" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white font-display">AUD / USD</h3>
              <p className="text-xs text-slate-400 mt-0.5">Australian Dollar</p>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white">
            <span className="material-icons-round">more_horiz</span>
          </button>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-display font-bold text-white">0.6540</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold flex items-center">
            <span className="material-icons-round text-sm mr-0.5">trending_down</span>
            -0.32%
          </span>
          <span className="text-xs text-slate-500">vs yesterday</span>
        </div>
      </div>
    </div>
  );*/
}

export default MarketGrid;
