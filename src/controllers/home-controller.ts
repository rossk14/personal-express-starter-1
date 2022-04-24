import { Controller, Get, Route } from "tsoa";
import Logger from "../config/logger";

@Route("home")
export class HomeController extends Controller {
    @Get("/")
    public sayHi(): any {
        Logger.info(`Processing request for 'sayHi' endpoint`);
        return {
            message: "Welcome to the home page!",
        };
    }
}