import dbConnect from '../../../lib/mongoose';
import Lead from '../../../models/Lead';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Tentando conectar ao MongoDB...');
    await dbConnect();
    console.log('Conexão com MongoDB estabelecida');
  } catch (error:any) {
    console.error('Erro de conexão com MongoDB:', error.message, error.stack);
    return NextResponse.json({ success: false, error: 'Erro ao conectar ao banco de dados.' }, { status: 500 });
  }

  try {
    const data = await request.json();
    console.log('Dados recebidos:', data);
    const lead = await Lead.create(data);
    console.log('Lead criado:', lead);
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error:any) {
    console.error('Erro ao criar lead:', error.message, error.stack);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function GET() {
  try {
    console.log('Tentando conectar ao MongoDB...');
    await dbConnect();
    console.log('Conexão com MongoDB estabelecida');
  } catch (error:any) {
    console.error('Erro de conexão com MongoDB:', error.message, error.stack);
    return NextResponse.json({ success: false, error: 'Erro ao conectar ao banco de dados.' }, { status: 500 });
  }

  try {
    const leads = await Lead.find({});
    console.log('Leads encontrados:', leads);
    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (error:any) {
    console.error('Erro ao buscar leads:', error.message, error.stack);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
