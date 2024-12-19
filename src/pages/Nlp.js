import React from 'react';
import './Nlp.css';

function Nlp() {
    return (
        <div className="main-content">
            <div className="phmain">
                <div className="nlp">
                    <h2>Payment History</h2>
                    <table className="payment-history">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Paid at</th>
                                <th>Status</th>
                                <th>Breakdown</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { description: 'Jhon', amount: '01-01-2024', date: 'Aug 21', status: 'Paid' },
                                { description: 'Anand', amount: '20-01-2024', date: 'Aug 21', status: 'Pending' },
                                { description: 'Rohit', amount: '31-03-2024', date: 'Aug 21', status: 'Paid' },
                                { description: 'Ashwin', amount: '12-07-2024', date: 'Aug 21', status: 'Paid' },
                            ].map((payment, index) => (
                                <tr key={index}>
                                    <td>{payment.description}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.date}</td>
                                    <td className={payment.status === 'Pending' ? 'pending' : 'paid'}>
                                        {payment.status}
                                    </td>
                                    <td><button className="view-data">View Data</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Nlp;
