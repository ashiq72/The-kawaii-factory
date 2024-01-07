import { NextResponse } from "next/server";
import { User } from "@/models/User";
import { connect } from "@/database/mongo.config";

connect();
export async function POST(requst) {
  try {
    const reqBody = await requst.json();
    const { name, email, password } = reqBody;

    // Check if user already exists
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    const saveUser = await newUser.save();
    console.log("SaveUser", saveUser);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      saveUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
