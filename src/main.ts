import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'aws-sdk';
import {ConfigService} from "@nestjs/config";
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    const configService = app.get(ConfigService);
    config.update({
        accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
        region: configService.get('AWS_REGION'),
    });

    await app.listen(3000);
}

bootstrap();
