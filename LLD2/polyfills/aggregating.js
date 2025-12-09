const transactions = [
  { customerId: 1, amount: 100, date: "2025-03-01" }, // acc +obj.amount
  { customerId: 2, amount: 150, date: "2025-03-01" },
  { customerId: 1, amount: 200, date: "2025-03-02" },
  { customerId: 3, amount: 50, date: "2025-03-02" },
  { customerId: 2, amount: 120, date: "2025-03-03" },
];

// totalTransactions -> transactions.length
// total amount -> 620
// transactionPerDay
// transactionPerCustomer ->

const totalAmount = transactions.reduce((sum, txn) => sum + txn.amount);

const transactionPerDay = transactions.reduce((acc, txn) => {
  if (!acc[txn.date]) {
    acc[txn.date] = [];
  }
  acc[txn.date].push(txn);
  return acc;
}, {});

/**
 * {
 * "2025-03-01": 2,
 * "2025-03-02" : 1
 * }
 */
return {
  totalAmount,
  transactionPerDay,
  transactionPerCustomer,
};
