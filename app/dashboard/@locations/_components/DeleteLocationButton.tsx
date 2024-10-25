import DeleteLocation from "@/actions/locations/delete";

export default function SelectDeleteButton({store}: {store:string | string[] | undefined}){

    if(!store) return null; 
    return(
        <form action={DeleteLocation} className="my-4">
            <button type="submit" name="DeleteValue" value={store} color="danger" className="my-4">
                Borrar Contenidos
            </button>
        </form>
    )

}