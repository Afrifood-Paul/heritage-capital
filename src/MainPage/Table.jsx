import React from "react";
import { Table } from "antd";
const dataSource = [
  {
    key: '1',
    company: 'UBA',
    pclose: 10,
    close: 30,
    chg: 7,
    tradeDate: '2023-11-10',
  },
  {
    key: '2',
    company: 'AFRIPRUD',
    pclose: 6.5,
    close: 6.55,
    chg: 0.05,
    tradeDate: '2023-11-10',
  },
  {
    key: '3',
    company: 'AFRIPRUD',
    pclose: 6.5,
    close: 6.55,
    chg: 0.05,
    tradeDate: '2023-11-10',
  },
  {
    key: '4',
    company: 'AFRIPRUD',
    pclose: 6.5,
    close: 6.55,
    chg: 0,
    tradeDate: '2023-11-10',
  },
];

const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    className: 'text-white',
  },
  {
    title: 'PCLOSE',
    dataIndex: 'pclose',
    key: 'pclose',
    className: 'text-white',
  },
  {
    title: 'CLOSE',
    dataIndex: 'close',
    key: 'close',
    className: 'text-white',
  },
  {
    title: 'CHG',
    dataIndex: 'chg',
    key: 'chg',
    render: (text) => (
      <span className={`px-2 py-1 rounded ${text > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {text > 0 ? `▲${text}` : `▼${text}`}
      </span>
    ),
    className: 'text-white',
  },
  {
    title: 'Trade Date',
    dataIndex: 'tradeDate',
    key: 'tradeDate',
    className: 'text-white',
  },
];

const TableWatch = () => {
  return (
    <div className="container text-white mb-10">
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        
        pagination={false}
        rowClassName="bg-blue-900 text-white"
        className="bg-blue-900 text-white xl:w-full"
      />
    </div>
  );
};
export default TableWatch;
