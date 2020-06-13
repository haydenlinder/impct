import React from 'react';
import LineChart from '../Line Chart';

const Investments = ({ investments }) => (
    <div className="investments-container">
        <div className="investments-graph-container">
                <LineChart />
        </div>
        <div className="investments-feed-container">
            <div className="investments-feed-title">
                History
            </div>
            <div className="investment-feed-items">
            {investments.map((investment,i) => 
                <div key={i} className={"investment-feed-item" + (!(i%2) ? '' : " even")}>
                    <div>Recipient: {investment.recipient}</div>
                    <div>Amount: ${investment.amount.toFixed(2)}</div>
                    <div>Date: {investment.date}</div>
                </div>
            )}
            </div>
        </div>
    </div>
);

export default Investments;