import {Module} from '@nestjs/common';
import {PostModule} from "./post/post.module";
import {ConfigModule} from "@nestjs/config";
import * as Joi from '@hapi/joi';
import {DatabaseModule} from "./database.module";
import {CategoryModule} from "./category/category.module";
import UserModule from "./user/user.module";
import AddressModule from "./address/address.module";

@Module({
    imports: [
        PostModule,
        CategoryModule,
        UserModule,
        AddressModule,
        DatabaseModule,
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                PORT: Joi.number(),
                AWS_REGION: Joi.string().required(),
                AWS_ACCESS_KEY_ID: Joi.string().required(),
                AWS_SECRET_ACCESS_KEY: Joi.string().required(),
                AWS_BUCKET_NAME: Joi.string().required(),
            })
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
