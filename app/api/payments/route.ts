import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      data: [
        {
          id: 1,
          date: "12/12/2024",
          description: "Description 1",
          amount: "2",
        },
        {
          id: 2,
          date: "12/12/2024",
          description: "Description 2",
          amount: "1",
        },
        {
          id: 3,
          date: "12/12/2024",
          description: "Description 3",
          amount: "4",
        },
      ],
    },
    {
      status: 200,
    }
  );
}
