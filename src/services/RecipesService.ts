import { useHttp } from '../hook/http.hook'
import { IParam } from '../type'

export const useRecipesService = () => {
    const { isLoading, request } = useHttp()

    const getPopularRecipes = () => {
        return request(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
        )
    }

    const getVegetarianRecipes = () => {
        return request(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
        )
    }

    const getCuisine = (type: IParam) => {
        return request(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${type}}`
        )
    }

    const getDetailRecipe = (id: IParam) => {
        return request(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
    }

    const getRecipesBySearched = (name: IParam) => {
        return request(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
    }

    return {
        isLoading,
        getPopularRecipes,
        getVegetarianRecipes,
        getCuisine,
        getDetailRecipe,
        getRecipesBySearched,
    }
}
