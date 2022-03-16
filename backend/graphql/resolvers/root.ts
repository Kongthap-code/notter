import {
    Query as userQuery,
} from "./user"

export interface Context {
    [key: string]: any;
}

export interface Resolver {
    [key: string]: (parent: any, args: any, ctx: Context) => any;
}

type Resolvers = Resolver;

interface Root {
    Query: Resolvers;
    [key: string]: Resolvers;
}

const resolvers: Root = {
    Query: {
        ...userQuery
    }
}

export default resolvers
