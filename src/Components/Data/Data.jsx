import data from "../../data.json"
import { List, Item, Title, Text } from './Data.styled'


function Data () {
    return (
        <List>
            {data.map(({id, name, age, isOnline, role, points}) =>{
                
                return (
                <Item key={id} $isOnline={isOnline}>
                    <Title>{name}</Title>
                    <p>{age}</p>
                    <p>{isOnline ? "active" : "not active"}</p>
                    <Text $role={role}>{role}</Text>
                    <p>{points}</p>
                </Item>
                )
            })}
            </List>
    )
}



export default Data