import { PrismaClient } from ".prisma/client";
import PrismaDataSource from "../datasources/prisma";

import {
    Query as userQuery,
    Mutation as userMutaion,
} from "./user"

interface DataSource {
    prisma: PrismaDataSource;
}

export interface Context {
    dataSources: DataSource;
    prisma: PrismaClient;
    [key: string]: any;
}

export interface Resolver {
    [key: string]: (parent: any, args: any, ctx: Context) => any;
}

type Resolvers = Resolver;

interface Root {
    Query: Resolvers;
    Mutation: Resolvers;
    [key: string]: Resolvers;
}

const resolvers: Root = {
    Query: {
        ...userQuery
    },
    Mutation: {
        ...userMutaion
    }
}

export default resolvers
