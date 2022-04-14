import s from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={s.transactionHistory}>
  <thead className={s.thead}>
    <tr className={s.tr}>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody className={s.tbody}>
    {items.map(({id,type,amount,currency})=>(
      <tr className={s.tr} key={id}>
          <td className={s.td}>{type}</td>
          <td className={s.td}>{amount}</td>
          <td className={s.td}>{currency}</td>
    </tr>              
    ))}
  </tbody>
</table>
    )
}