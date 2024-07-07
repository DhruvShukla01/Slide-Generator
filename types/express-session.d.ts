import 'express-session';

declare module 'express-session' {
    interface SessionData {
        slides: string[];
    }
}