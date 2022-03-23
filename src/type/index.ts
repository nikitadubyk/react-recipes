export interface IRecipes {
    id: number
    title: string
    calories: number
    image: string
}

export interface IResponse {
    responce: IRecipes[]
}
