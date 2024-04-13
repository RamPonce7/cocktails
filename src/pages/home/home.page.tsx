import { ListCocktailComponent } from "../../shared";
import { useStoreApp } from "../../state/useStore";



const HomePage = () => {

    const { appSelector } = useStoreApp()
    const { cocktails } = appSelector(state => state.cocktails)




    return (
        <>
            <ListCocktailComponent title="Alcoholic Drinks" cocktails={cocktails.filter(cocktail => cocktail.isAlcoholic)} />
            <ListCocktailComponent title="Non-Alcoholic Drinks" cocktails={cocktails.filter(cocktail => !cocktail.isAlcoholic)} />

        </>
    )
}


export default HomePage;