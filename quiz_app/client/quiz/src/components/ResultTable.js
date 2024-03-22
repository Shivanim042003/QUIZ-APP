import React from 'react'

function ResultTable() {
  return (
    <div>
       <table>
        <thead className='table-header'>
           <tr className='tabl-row'>
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Results</td>
           </tr>
        </thead>
        <tbody>
            <tr className='table-body'>
              <td>Daily Tution</td>
              <td>03</td>
              <td>20</td>
              <td>Passed</td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}

export default ResultTable
