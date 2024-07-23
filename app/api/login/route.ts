import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateToken } from '../../../lib/auth';

const USERNAME = process.env.ADMIN_USERNAME as string;
const PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH as string;


export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log(PASSWORD_HASH)   
  const { username, password }: { username: string; password: string } = await request.json();

  if (username !== USERNAME) {
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await verifyPassword(password, PASSWORD_HASH);
  if (!isValid) {
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  }

  const token = generateToken({ username: USERNAME });
  return NextResponse.json({ success: true, token });
}
