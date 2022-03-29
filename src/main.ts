import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import Express from 'express';
import morgan from 'morgan';
import { ExpressAdapter } from '@nestjs/platform-express';
import 'dotenv/config';
// import { OpenApiValidator } from 'express-openapi-validate';
// import * as fs from 'fs';
// import * as path from 'path';
// import yaml from 'js-yaml';
import bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const server = Express();
async function bootstrap() {
  // const openApiDocument = yaml.safeLoad(
  //   fs.readFileSync(path.join(__dirname, '../openapi', 'openapi.yaml'), 'utf-8')
  // );
  // const validator = new OpenApiValidator(openApiDocument);
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: process.env.NODE_ENV === 'dev',
  });
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.use(
    helmet({
      // contentSecurityPolicy: sets all of the defaults, but overrides frame-ancestors
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'frame-ancestors': [`'none'`],
        },
      }
    })
  );
  
  // X-XSS-Protection
  app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
  });

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.use(morgan('combined'));
  app.setGlobalPrefix('api/dexa');

  const server2 = await app.listen(process.env.PORT || 3000);
  server2.setTimeout(600000);
}
bootstrap();
