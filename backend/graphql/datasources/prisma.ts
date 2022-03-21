import { ApolloError, AuthenticationError } from "apollo-server-micro";
import { PrismaClient} from "@prisma/client";
import { DataSource } from "apollo-datasource";
import { signJWT } from "../../utils/auth"
import bcrypt from "bcryptjs"

class PrismaDataSource extends DataSource {
    constructor(public prisma: PrismaClient){
        super();
    }

    async getUsers() {
        const users = await this.prisma.user.findMany();
        return users
    }

    async createUser(args) {
        const usersnameExist = await this.prisma.user.findUnique({
            where: {username: args.username}
        });

        if (usersnameExist){
            return new ApolloError('username already in use,"USERNAME_EXIST"');
        }

        const hash = bcrypt.hashSync(args.password, 10);

        const user = await this.prisma.user.create({
            data: {
                username: args.username,
                name: args.name,
                password: hash,
            }
        });

        return signJWT(user.user_id);
    }

    async login(args){
        const user = await this.prisma.user.findUnique({
            where: {username: args.username}
        });

        if (!user) return new AuthenticationError("User not found !")
        
        if(!bcrypt.compareSync(args.password,user.password))
            return new AuthenticationError("Password error !");

        return signJWT(user.user_id);
    }

}

export default PrismaDataSource