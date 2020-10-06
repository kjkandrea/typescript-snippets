import UserData from '../../../mocks/data/users'
import { Users } from '../../../types/data/index'

const data: Users = UserData
const user = findUserById(2)

function findUserById(id: number): string {
  const temp = data.contents.find(user => user.id === id)
	return temp ? temp.name : ''
}

console.log(user)