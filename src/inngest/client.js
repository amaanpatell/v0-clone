import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: process.env.NEXT_PUBLIC_INNGEST_ID || "",
})