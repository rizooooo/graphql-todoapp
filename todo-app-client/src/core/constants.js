const QUERY_MUTATIONS =  {
    GET_ALL_TODOS: 'ALL_TODOS',
    DELETE_TODO :'DELETE_TODO',
    CREATE_TODO: 'CREATE_TODO',
    UPDATE_TODO: 'UPDATE_TODO'
}


const GRAPHQL_API = 'http://localhost:4000/';

const FETCH_BODY = { 
    method: 'POST',
    body: null,
    headers: {
        'content-type': 'application/json'
    }
}

export { QUERY_MUTATIONS , GRAPHQL_API, FETCH_BODY };