const InvoiceForm = ({
    clientName,
    setClientName,

    clientAddress,
    setClientAddress,

    invoiceNumber,
    setInvoicNumber,

    date,
    setDate,
    
    tax,
    setTax

}) => {

  return (
    <div className="grid md: grid-cols-2 gap-4 mb-6 p-2">
        {/* <h1>Invoice Form</h1> */}
       <input  type="text"
        placeholder="Client Name..."
        value={clientName}
        onChange={(e) => {
        setClientName(e.target.value)
        }
    }
        className="border p-2 rounded"
        />


        <textarea type="text"
        placeholder="Client Address..."
        value={clientAddress}
        onChange={(e) => {
        setClientAddress(e.target.value)
        }
    }
        className="border p-2 rounded"
        />


        <input type="text"
        placeholder="Invoice Number..."
        value={invoiceNumber}
        onChange={(e) => {
        setInvoicNumber(e.target.value)
        }
    }
         className="border p-2 rounded"   
        />


        <input type="date"
        value={date}
        onChange={(e) => {
        setDate(e.target.value)
        }
    }
        className="border p-2 rounded"
        />

        <input type="number"
        placeholder="Tax %"
        value={tax}
        onChange={(e) =>{
         setTax(e.target.value)
        }}
        className="border p-2 rounded"
        />


    </div>
  );
}

export default InvoiceForm;
