import dbConnect from '../../../lib/mongoose';
import Lead from '../../../models/Lead';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const data = await request.json();
    const lead = await Lead.create(data);
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const leads = await Lead.find({});
    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
