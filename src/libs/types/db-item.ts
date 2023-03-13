export type ItemTypes = "job" | "story" | "comment" | "poll" | "pollopt"

export interface Item {
    id: number,
    type: ItemTypes
    by: string
    time: Date
    deleted?: boolean
    text?: string
    dead?: boolean
    parent?: number
    poll?: number
    kids?: number[]
    url?: string
    score: number
    title?: string
    parts?:number[]
    descendants: number
}