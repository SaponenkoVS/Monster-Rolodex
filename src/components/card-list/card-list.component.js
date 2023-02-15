
import './card-list.component.css'

const CardList=({monsters})=>{


        let MonstersList = monsters.map((el)=>{return(

          <div key={el.id} className='card-container'>
            <img alt='monster' src={`https://robohash.org/${el.id}?set=set1&size=180x180`}/>
            <h2>{el.name}</h2>
            <p>{el.email}</p>
          </div>)})
        
        

        return (
      <div className='CardList'>
      {MonstersList}
      </div>
        )
    }

export default CardList