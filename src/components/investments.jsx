import React from 'react';
import LineChart from '../Line Chart';

const Investments = ({ investments }) => (
    <div className="investments-container">
        <div className="investments-graph-container">
                <LineChart />
        </div>
        <div className="investments-feed-container">
            History
            {investments.map((investment,i) => 
                <div key={i} className="investment-feed-item">
                    <div>Recipient: {investment.recipient}</div>
                    <div>Amount: ${investment.amount.toFixed(2)}</div>
                    <div>Date: {investment.date}</div>
                </div>
            )}
        </div>
    </div>
);

export default Investments;