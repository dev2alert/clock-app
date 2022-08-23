import {Controller, MessageEvent, Sse} from "@nestjs/common";
import {interval, map, Observable} from "rxjs";

@Controller("api")
export class ApiController {
    @Sse("time")
    public getTime(): Observable<MessageEvent> {
        return interval(1000).pipe(
            map(() => {
                const data: string = Date.now().toString();
                return {data};
            })
        );
    }
}
