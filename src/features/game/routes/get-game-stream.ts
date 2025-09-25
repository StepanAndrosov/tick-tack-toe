import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";

export function getGameStream(req: NextRequest) {
    const { response, write, addCloseListener } = sseStream(req)
    let counter = 1
    const inverval = setInterval((
    ) => {
        write(counter++)
    }, 2000)

    addCloseListener(() => {
        clearInterval(inverval)
    })

    return response
}