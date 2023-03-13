export interface IPost {
    by: string
    descendants: number
    id: number
    score: string
    time: number
    title: string
    text?: string
    url?: string
    kids?: number[]
    isFull?: boolean
    childs?: IPost[]
}