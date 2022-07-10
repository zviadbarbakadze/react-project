
import{useQuery,gql}from "@apollo/client";
import './CharacterLists.css';

const GET_CHARACTERS=gql`
query{
    characters{
      results{
        id
        name
        image
      }
    }
  }

`



export default function CharacterLists(){
    
    const {error,loading,data}=useQuery(GET_CHARACTERS)
    console.log({error,loading,data})
    if(loading)return <div>Loading...</div>
    if(error)return <div>Something went wrong</div>
    return(
        <div className='CharacterLists'>
            {data.characters.results.map(character=>{
                return <div>
                    <img src={character.image} alt="" />
                    <h2>{character.name}</h2>
                </div>
            })}
            
        </div>
    )
}