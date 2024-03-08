import axios from "axios";
import { useState, useEffect } from "react";

const BaseUrl = `https://api.coingecko.com/api/v3`;

export default function Table() {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBitcoinInfo = async () => {
      try {
        setError(false);
        const response = await axios.get(`${BaseUrl}/coins/bitcoin`);
        console.log(response.data);
        setInfo(response.data); // Assuming response.data is the correct structure
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchBitcoinInfo();
  }, []);

  if (error) return <h1 className="text-3xl font-medium">Something Went Wrong</h1>;

  return (
    <div className="flex justify-evenly flex-wrap">
      <div className="overflow-x-auto">
        <table className="table ">
          <tbody>
            <TableRow label="Bitcoin Price" value={info.market_data?.current_price?.usd} />
            <TableRow label="24h Low / 24h High" value={`${info.market_data?.low_24h?.usd} / ${info.market_data?.high_24h?.usd}`} />
            <TableRow label="7d Low / 7d High" value={`${info.market_data?.low_7d?.usd} / ${info.market_data?.high_7d?.usd}`} />
            <TableRow label="Trading Value" value={info.market_data?.total_volume?.usd} />
            <TableRow label="Market Cap" value={`# ${info.market_data?.market_cap_rank}`} />
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          <tbody>
            <TableRow label="Bitcoin Price" value={info.market_data?.current_price?.usd} />
            <TableRow label="24h Low / 24h High" value={`${info.market_data?.low_24h?.usd} / ${info.market_data?.high_24h?.usd}`} />
            <TableRow label="7d Low / 7d High" value={`${info.market_data?.low_7d?.usd} / ${info.market_data?.high_7d?.usd}`} />
            <TableRow label="Trading Value" value={info.market_data?.total_volume?.usd} />
            <TableRow label="Market Cap" value={`# ${info.market_data?.market_cap_rank}`} />
          </tbody>
        </table>
      </div>

    </div>
  );
}

const TableRow = ({ label, value }) => (
  <tr className="border-b-2 border-gray-200">
    <td className="text-grey-500 pr-28">{label}</td>
    <td>{value}</td>
  </tr>
);
