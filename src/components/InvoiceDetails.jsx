import html2pdf from "html2pdf.js";
const InvoiceDetails = ({
      clientName,
      clientAddress,
      invoiceNumber,
      items,
      date,
      tax,
}) => {
   const subtotal = items.reduce(
    (acc, item) => acc + Number(item.amount),
    0
   );

   const taxAmount = (subtotal * tax) /100;

   const grandTotal = subtotal + taxAmount

  const downloadPDF = () => {
    const element= document.getElementById('invoice');
     console.log("PDF Download")
    html2pdf().from(element).save("invoice.pdf")
  };

  return (
    <div>
      <div id="invoice"
      className="border p-5 rounded bg-white"
      >
        <h2 className="text-2xl font-bold mb-4">
          Invoice Details
        </h2>
        <p><strong>client:</strong>{clientName}</p>
        <p><strong>Address:</strong>{clientAddress}</p>
        <p><strong>Invoice Number:</strong>{invoiceNumber}</p>
        <p><strong>Date</strong>{date}</p>
        <table className="w-full border mt-4">
          <thead>
            <tr>
              <th className="border p-2">
                Discription
              </th>
              <th className="border p-2">
                Quantity
              </th>
              <th className="border p-2">
                Rate
              </th>
              <th className="border p-2">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {
              items
              .map((item, index) =>(
                <tr key={index}>

              <td className="border">
                 {item.description}
              </td>
              <td className="border p-2">
                   {item.quantity}
              </td>
              <td className="border p-2">
                 {item.rate}
              </td>
              <td className="border p-2">
               {item.amount}
              </td>
            </tr>
              ))}
            
          </tbody>
        </table>
        
        <div className="mt-5">
          <h3>
          Subtotal: {subtotal}
        </h3>

        <h3>
          Tax: {taxAmount}
        </h3>
        <h2>
          Total: {grandTotal}
        </h2>
        </div>
      </div>
      <button 
      onClick={downloadPDF}
      className="mt-5 bg-green-500 text-white px-5 py-2 ronded"
      >
        Download PDF
        </button>
    </div>
  );
}

export default InvoiceDetails;
