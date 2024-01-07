import { NextResponse } from "next/server";

import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";

// * Connect to the DB
connect();

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const user = await User.findOne({ email: body.email });
    if (user) {
      const checkPassword = user.password === body.password;

      if (checkPassword) {
        return NextResponse.json(
          { status: 200, message: "User Logged in successfully!" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "Please check your credentials.",
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: 400,
          errors: {
            email: "No User found in our system with above email.",
          },
        },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error) {
      return NextResponse.json(
        { status: 400, errors: error.messages },
        { status: 200 }
      );
    }
  }
}
