import React, { useState } from 'react'
import InvoiceForm from './components/InvoiceForm';
import InvoiceTable from './components/InvoiceTable';
import InvoiceDetails from './components/InvoiceDetails';




const App = () => {

  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoicNumber] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState([
    {
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ]);
  const [tax, setTax] = useState(18);

  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <div className='max-w-6xl mx-auto bg-white shadow rounded-lg p-5'>
      <h1 className='text-3xl font-bold text-center mb-3'>Invoice Builder</h1>
      <InvoiceForm clientName={clientName}
      setClientName={setClientName}
      clientAddress={clientAddress}
      setClientAddress={setClientAddress}
      invoiceNumber = {invoiceNumber}
      setInvoicNumber={setInvoicNumber}
      date={date}
      setDate={setDate}
      tax={tax}
      setTax={setTax}
      />

      <InvoiceTable
      items={items}
      setItems={setItems} 
      />

      <InvoiceDetails
      clientName={clientName}
      clientAddress={clientAddress}
      invoiceNumber={invoiceNumber}
       date={date} 
      items={items}
      tax={tax}
      />
    </div>

    </div>
  );
}

export default App;
