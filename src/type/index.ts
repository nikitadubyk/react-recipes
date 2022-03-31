export interface Recipes {
    id: number
    title: string
    calories: number
    image: string
}

export interface Response {
    responce: Recipes[]
}

export interface Ingredients {
    id: number
    original: string
}

export interface DetailRecipe {
    id: number
    title: string
    image: string
    summary: string
    instructions: string
    extendedIngredients: Ingredients[]
}

export interface Favorite {
    id: number | undefined
    title: string | undefined
    image: string | undefined
}

export type Param = string | undefined
