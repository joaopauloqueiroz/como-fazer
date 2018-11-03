const axios = require('axios')
const baseUrl = 'https://como-fazer-dev-full.firebaseio.com/'
const auth = "Niu8MN5oOCkQLHNUsVgHykg7oSDhdzlkJLUwwJgC"

//listar
const list = async (key) => {
    const content = await axios.get(baseUrl+key+'.json?auth='+auth)
    
    if(content.data){
        const objetos = Object
                                .keys(content.data)
                                .map(key => {
                                    return {
                                    id: key,
                                    ...content.data[key]
                                }
                            })

        return objetos
                 
    }
    return []

}

//deletar
const apagar = async ( key, id ) => {
    await axios.delete(baseUrl + key + '/' + id + '.json?auth='+auth)
    return true
}


//get one
const get = async ( key, id ) => {
    const content = await axios.get(baseUrl + key + '/' + id + '.json?auth='+auth)

    return {
            id: id,
            ...content.data
    }
}

//atualizar
const update = async ( key, id, data ) => {
    await axios.put(baseUrl +  key + '/' + id + '.json?auth='+auth, data)
    return true
}

//create 
const create = async ( key, data ) => {
    console.log(data)
    await axios.post(baseUrl + key +'.json?auth='+auth, data)
    return true
}

module.exports = {
    list, apagar, get, update,  create
}