const GET_PERSONAS = `
        {
            personas{
                id
                name
                lastName
                age
                email
            }
        }`

const ADD_PERSONA = `
        mutation{
            createPersona(
                data:{
                    name:"Harry",
                    lastName:"Potter",
                    age:28,
                    email:"h.potter@gmail.com"
                }
            )
            {
                name
                lastName
            }
        }`

module.exports = {
    GET_PERSONAS,
    ADD_PERSONA
}