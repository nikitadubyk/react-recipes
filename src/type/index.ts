export interface IRecipes {
    id: number
    title: string
    calories: number
    image: string
}

export interface IResponse {
    responce: IRecipes[]
}

export interface IIngredients {
    id: number
    original: string
}

export interface IDetailRecipe {
    id: number
    title: string
    image: string
    summary: string
    instructions: string
    extendedIngredients: IIngredients[]
}

export interface IFavorite {
    id: number | undefined
    title: string | undefined
    image: string | undefined
}

export type IParam = string | undefined
