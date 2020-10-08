"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const post_module_1 = require("./post/post.module");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const database_module_1 = require("./database.module");
const category_module_1 = require("./category/category.module");
const user_module_1 = require("./user/user.module");
const address_module_1 = require("./address/address.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            post_module_1.PostModule,
            category_module_1.CategoryModule,
            user_module_1.default,
            address_module_1.default,
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
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
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map