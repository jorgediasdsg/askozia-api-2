import {askoziaApi as api} from './api'

async function getUsers(){
    const response = await api.get(`/api.php?command=get_all_extensions&hash=${process.env.ASKOZIA_HASH}`)
    return response
}

export default getUsers