export default class HockeyTech {
    constructor(key: string, clientCode: string, language?: string);
    getSeasonList(): Promise<any>;
}