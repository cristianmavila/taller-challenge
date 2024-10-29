const getData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/payments");
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

interface TransactionProps {
  id: number;
  date: string;
  description: string;
  amount: string | number;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="mx-auto my-8 max-w-2xl">
      <h1>Taller challenge</h1>
      <ul className="my-4">
        {data.length > 0 &&
          data?.map(({ id, date, description, amount }: TransactionProps) => (
            <li className="border-white border-t-2 grid grid-cols-4 py-4" key={id}>
              <div>{id}</div>
              <div>{date}</div>
              <div>{description}</div>
              <div>{amount}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
