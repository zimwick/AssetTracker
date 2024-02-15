export default function AssetTable({ response }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>Location</th>
          <th>Serial Number</th>
          <th>Price Paid</th>
          <th>Date Purchased</th>
          <th>Warranty Expiration</th>
          <th>Owner First Name</th>
          <th>Owner Last Name</th>
        </tr>
      </thead>
      <tbody>
        {response.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.location}</td>
            <td>{item.serialNumber}</td>
            <td>{item.pricePaid}</td>
            <td>{item.datePurchased}</td>
            <td>{item.warrantyExpiration}</td>
            <td>{item.ownerFirstName}</td>
            <td>{item.ownerLastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
