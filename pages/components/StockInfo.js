import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryInfo() {
 
  const { symbol } = useParams();
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function apiCall() {
      const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=YOUR_API_KEY_HERE`);
      const tempData = await res.json();
      setArray(tempData);
      setLoading(false);
    }
    apiCall();  
  }, [symbol])

  useEffect(() => {
    document.title = `${symbol}`;
  }, [symbol]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="h-4/5 w-4/5 m-auto mt-[2.5%]">
          {array.map((item) => (
            <div className="flex flex-row text-md text-slate-700">
              <div className = "flex flex-col self-center text-center order-1 w-[50%] mx-auto p-16">
                <div className="space-y-8">
                  <div>
                    <img className = "mx-auto" src={item.image} alt={"placeholder"} />
                  </div>
                  <div className="text-black text-4xl">{item.companyName}</div>
                  <p className = " ">
                  {item.description}
                  </p>
                </div>
              </div>

              <div className="order-2 space-y-16 m-auto w-[50%]">
                <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                  {item.name}
                </h1>
           
                  <ul className="flex flex-col gap-2 text-slate-700 border-l border-black dark:text-gray-400 p-16">
                    <li className="font-bold text-5xl pb-14 self-center">
                      General Details
                    </li>
                    <div className="order-2 flex flex-row space-x-24">
                    <div className="space-y-3">
                        <li>CEO: {item.ceo}</li>
                        <li>Symbol: {item.symbol}</li>                      
                        <li>Website: <a><u>{item.website}</u></a></li>
                        <li>Region: {item.country}</li>
                        <li>Sector: {item.sector}</li>
                        <li>Industry: {item.industry}</li>
                        <li>Full Time Employees: {item.fullTimeEmployees}</li>
                        <li>Phone: {item.phone}</li>
                        <li>Location: {item.address}, {item.city}, {item.state}</li>
                        <li>Country: {item.country}</li>
                      </div>
                      <div className="space-y-3">
                        <li>Price: {item.price}</li>
                        <li>Currency: {item.currency}</li>
                        <li>Beta: {item.beta}</li>
                        <li>Exchange: {item.exchangeShortName}</li>                       
                        <li>Volume Average: {item.volAvg}</li>                        
                        <li>CIK: {item.cik}</li>
                        <li>ISIN: {item.isin}</li>
                        <li>IPO: {item.ipoDate}</li>
                        <li>CUSIP: {item.cusip}</li>
                        <li>DCF: {item.dcf}</li>
                      </div>
                    </div>
                  </ul>
          
                {item.borders && (
                  <>
                    <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                      Borders:
                    </h3>
                    <ul className="flex flex-wrap items-start justify-start gap-2">
                      {item.borders.map((border, index) => (
                        <li
                          key={index}
                          className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700"
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <Link
                  to="/"
                  className="inline-block bg-white py-2 px-6 rounded text-gray-700 hover:bg-gray-400 transition-all duration-200"
                >
                  &larr; Back
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
