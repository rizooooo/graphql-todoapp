const { QUERY_MUTATIONS } = require("./constants");

const GRAPHQL_API = 'http://localhost:4000/';
const FETCH_BODY = { 
    method: 'POST',
    body: null,
    headers: {
        'content-type': 'application/json'
    }
}

const BASE_FETCH = async (query, param) => {
    const res = await fetch(GRAPHQL_API, {
        ...FETCH_BODY,
        body: JSON.stringify({ query })
    });
    const a =  await res.json();
    console.log(asd);
    return a.data[param];
}

const TODO_GRAPHQL = {

    GET_TODOS: async () => {
        const query = `
             {
                ${QUERY_MUTATIONS.GET_ALL_TODOS} {
                    id,
                    name,
                    done
                }
        }`;
        return await BASE_FETCH(query, QUERY_MUTATIONS.GET_ALL_TODOS);
    },
    CREATE_TODO: async (todo) => {
        const query = `
            mutation  {
                ${QUERY_MUTATIONS.CREATE_TODO}(name: "${todo}", done: ${false}) {
                    id,
                    name,
                    done
                }
        }`;
        return await BASE_FETCH(query, QUERY_MUTATIONS.CREATE_TODO);
    },
    UPDATE_TODO: async ({ id, name, done }) => {
        const query = `
            mutation  {
                ${QUERY_MUTATIONS.UPDATE_TODO}(id: ${id}, name: "${name}" done: ${done}) {
                    id,
                    name,
                    done
                }
        }`;
        return await BASE_FETCH(query, QUERY_MUTATIONS.UPDATE_TODO);
    },
    DELETE_TODO: async ({ id }) => {
        const query = `
            mutation  {
                ${QUERY_MUTATIONS.DELETE_TODO}(id: ${id}) {
                    id,
                    name,
                    done
                }
            }
        `;

        return await BASE_FETCH(query, QUERY_MUTATIONS.DELETE_TODO);
    }
}

export { TODO_GRAPHQL };