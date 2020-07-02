import ApolloClient from 'apollo-boost';

const clientGQL = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default clientGQL; 



  /*
        const query = `
        {
            personas{
                name
                lastName
                age
                email
            }
        }`
        */

        /*
        const query = `
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
        */