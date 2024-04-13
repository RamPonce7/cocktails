import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreApp } from "../../state/useStore";
import { searchDrinksByPattern } from "../../state/cocktails";
import { ListCocktailComponent } from "../../shared";




const SearchPage = () => {
    const { pattern } = useParams();
    const { appDispatch, appSelector } = useStoreApp();
    const { searched } = appSelector(state => state.cocktails)

    useEffect(() => {
        if (pattern !== undefined) {
            appDispatch(searchDrinksByPattern(pattern ?? ''))
        }

    }, [pattern])





    return (
        <>
            <ListCocktailComponent title={pattern ?? ''} cocktails={searched} />
        </>
    )
}


export default SearchPage;