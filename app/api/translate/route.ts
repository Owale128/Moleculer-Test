import broker from "@/moleculer.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const a = Number(searchParams.get('a'))
    const b = Number(searchParams.get('b'))

    try {
        const result = await broker.call('math.add', {a, b})
        return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json(error)
    }
}