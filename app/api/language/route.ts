import broker from "@/moleculer.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const language = searchParams.get('language')

    try {
        const result = await broker.call('language.getText', {language})
        return NextResponse.json({result})
    } catch (error) {
        NextResponse.json(error)
    }
}