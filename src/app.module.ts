import {Module} from "@nestjs/common";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";
import {appRootPath} from "@config";
import {ApiModule} from "./api/api.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(appRootPath, "./public")
        }),
        ApiModule
    ]
})
export class AppModule {}
