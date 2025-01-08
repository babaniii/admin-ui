import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Elements/Card'; // Card UI
import { Icon } from '../../Icon';     // Icon jika diperlukan
import CircularProgress from '@mui/material/CircularProgress'; // Loader bawaan Material-UI

const CardBill = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      const response = await axios.get(
        'https://jwt-auth-eight-neon.vercel.app/bills',
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setBills(response.data.data || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch bills');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Upcoming Bills"
      desc={
        <div>
          {loading ? (
            // Loader hanya di dalam Card
            <div className="flex justify-center items-center h-40">
              <CircularProgress /> {/* Loader Material-UI */}
            </div>
          ) : bills.length > 0 ? (
            bills.map((bill) => (
              <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                  </div>
                  <div>
                    <img className="h-6" src={`/images/${bill.logo}`} alt={bill.name} />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {bill.lastCharge}</span>
                  </div>
                </div>
                <div className="flex place-content-center flex-col">
                  <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>No upcoming bills.</div>
          )}
        </div>
      }
    />
  );
};

export default CardBill;
