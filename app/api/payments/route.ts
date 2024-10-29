import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          id: 1,
          date: "12/12/2024",
          description: "Description",
          amount: "Amount",
        },
        {
          id: 2,
          date: "12/12/2024",
          description: "Description",
          amount: "Amount",
        },
        {
          id: 3,
          date: "12/12/2024",
          description: "Description",
          amount: "Amount",
        },
      ],
    },
    {
      status: 200,
    }
  );
}
