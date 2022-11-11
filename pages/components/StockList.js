import React, {useState, useEffect} from "react";
import StockCard from "./StockCard";
import NavBar from "./NavBar";

function StockList() {
 
    const [stocks, setStocks] = useState([]);
    const [searchText, setSearchText] = useState("")
  
  useEffect(() => {
    async function apiCall() {
      const res = await fetch('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=YOUR_API_KEY_HERE');
      const info = await res.json(); 
      setStocks(info);
    }
    apiCall();
  }, [])

   async function searchStocks() {
      if (stocks.includes(searchText)) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=YOUR_API_KEY_HERE`
      );
      const stocks = await res.json();
      setStocks(stocks);
    } else {
      console.log("error")
    }
  }

  function handleSearchStocks(e) {
    e.preventDefault();
    searchStocks();
  }

    return (    
        <>
          <NavBar/>        
            <form
              onSubmit={handleSearchStocks}
              autoComplete="off"
              className="max-w-4xl md:flex-1"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search a stock by symbol..."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="h-16 bg-[#202C36] text-white pl-6 placeholder-white placeholder-pl-4 w-screen shadow outline-none transition-all duration-200"
              />
            </form>          
           <main className = "flex flex-wrap h-full w-screen px-[4%] grid-rows-5">          
                {
                    stocks.map((stocks, i) => {                    
                        return (
                            <StockCard
                                key = {stocks[i]}
                                {...stocks}                      
                            />
                        )
                    })
                }
            </main>                  
        </>
    ) 
}

export default StockList;
