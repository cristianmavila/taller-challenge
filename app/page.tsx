const getData = async () => {
  const data = await fetch("api/payments");
  return data;
};

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div className="mx-auto my-8 max-w-2xl">
      <h1>Taller challenge</h1>
      <ul className="my-4">
        <li className="border-white border-t-2 grid grid-cols-4 py-4">
          <div>12</div>
          <div>12/12/2024</div>
          <div>Description</div>
          <div>Amount</div>
        </li>
        <li className="border-white border-t-2 grid grid-cols-4 py-4">
          <div>12</div>
          <div>12/12/2024</div>
          <div>Description</div>
          <div>Amount</div>
        </li>
        <li className="border-white border-t-2 grid grid-cols-4 py-4">
          <div>12</div>
          <div>12/12/2024</div>
          <div>Description</div>
          <div>Amount</div>
        </li>
      </ul>
    </div>
  );
}
