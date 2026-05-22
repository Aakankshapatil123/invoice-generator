const InvoiceTable = ({

  items,
  setItems

}) => {

  const handleChange = (index, e) => {
     const values =[...items];
     values[index][e.target.name] = e.target.value

     values[index].amount = values[index].quantity * values[index].rate;

     setItems(values)
  }

  const addItem =() => {
    setItems([
      ...items,
      {
      
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
    ])
  };

  const removeItem = (index) => {
    const values = [...items]
    values.splice(index, 1)
    setItems(values)
  }

  return (
    <div className="mb-6 overflow-auto">
      <table className="w-full border">
        <thead className="bg-gray-200">
            <tr>
                <th className="border p-2">Description</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Rate</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Remove</th>
            </tr>
        </thead>
        <tbody>
          {
            items
            .map((item,index) =>(
              <tr key={index}>
            <td className="border">

              <input
              type="text"
              name='description' 
              value={item.description}
              onChange={(e) => handleChange(index, e)}
              className="w-full p-2"
              />
              </td>

              <td className="border">
              <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleChange(index, e)}
              className="w-full p-2" 
              />
              </td>

              <td className="border">
              <input
              type="number"
              name="rate" 
              value={item.rate}
              onChange={(e) => handleChange(index, e)}
              className="w-full p-2"
              />
              </td>
               
               <td className="border p-2">
               {item.amount}
            </td>
             
             <td className="border">
              <button onClick={removeItem}
              className="bg-red-500 text-white px-3 py-1 rounded text-center  mx-4"
              >
              Delete
            </button>
             </td>
          </tr>
            ))}
          </tbody>
      </table>
      <button onClick={addItem}
       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >Add Item
      </button>
    </div>
  )
}

export default InvoiceTable;
