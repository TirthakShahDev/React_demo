import { Ability } from '@casl/ability'
import { store} from '../store'

const storeData= store.getState();
const abilities = storeData.UserData ? storeData.UserData.abilities : []
export default new Ability(abilities)
