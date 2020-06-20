export default class HockeyTech {
    /**
     * Constructor
     * @param key string
     * @param clientCode string
     * @param language string Examples: en, fr
     */
    constructor(key: string, clientCode: string, language?: string);

    /**
     * Changes the default base url for the modulekit endpoints
     * @param modulekitBaseUrl string
     */
    setModulekitBaseUrl(modulekitBaseUrl: string): void;

    /**
     * Changes the default base url for the gamecenter endpoints
     * @param gameCenterBaseUrl string
     */
    setGameCenterBaseUrl(gameCenterBaseUrl: string): void;

    /**
     * Changes the key set by the constructor
     * @param key 
     */
    setKey(key: string): void;

    /**
     * Changes the client code set by the constructor
     * @param clientCode string
     */
    setClientCode(clientCode: string): void;

    /**
     * Changes the language set by the constructor
     * @param language string
     */
    setLanguage(language: string): void;

    /**
     * Retrieves the daily schedule
     * @param fetchDate string Date format: YYYY-MM-DD
     */
    getDailySchedule(fetchDate: string): Promise<any>;

    /**
     * Retrieves how many games per day
     * @param startDate string
     * @param endDate string
     */
    getGamesPerDay(startDate: string, endDate: string): Promise<any>;

    /**
     * Retrieves the roster
     * @param seasonId number
     * @param teamId number
     */
    getRoster(seasonId: number, teamId: number): Promise<any>;

    /**
     * Retrieves the scorebar
     * @param numberOfDaysAhead number
     * @param numberOfDaysBack number
     */
    getScorebar(numberOfDaysAhead: number, numberOfDaysBack: number): Promise<any>;

    /**
     * Retrieves the Player Profile => Bio (Header section)
     * @param playerId number
     */
    getPlayerProfileBio(playerId: number): Promise<any>;

    /**
     * Retrieves the Player Profile => Player Media
     * Not sure why here it's expecting a personId instead of a playerId,
     * but it is like this in the documentation
     * @param personId number
     */
    getPlayerProfileMedia(personId: number): Promise<any>;

    /**
     * Retrieves the player's stats by season
     * @param playerId number
     */
    getPlayerProfileStatsBySeason(playerId: number): Promise<any>;

    /**
     * Retrieves the player's game by game stats
     * @param playerId number
     */
    getPlayerProfileGameByGameStats(playerId: number): Promise<any>;

    /**
     * Retrieves the player's current season stats
     * @param playerId number
     */
    getPlayerProfileCurrentSeasonStats(playerId: number): Promise<any>;

    /**
     * Retrieves the season list
     */
    getSeasonList(): Promise<any>;

    /**
     * Retrieves the teams by season
     * @param seasonId number
     */
    getTeamsBySeason(seasonId: number): Promise<any>;

    /**
     * Retrieves the season schedule.
     * The teamId parameter is optional
     * @param seasonId number
     * @param teamId number
     */
    getSeasonSchedule(seasonId: number, teamId?: number): Promise<any>;

    /**
     * Retrieves the standing types
     * @param seasonId number
     */
    getStandingTypes(seasonId: number): Promise<any>;

    /**
     * Retrieves the standings
     * @param seasonId number
     * @param stat string Default: conference
     * @param standingType string Default: standings
     */
    getStandings(seasonId: number, stat: string, standingType: string): Promise<any>;

    /**
     * Retrievs the leaders skaters
     * @param seasonId number
     * @param returnAmount number Default: 5
     * @param qualified string Default: all
     */
    getLeadersSkaters(seasonId: number, returnAmount: number, qualified: string): Promise<any>;

    /**
     * Retrieves the leaders goalies
     * @param seasonId number
     * @param returnAmount number Default: 5
     * @param qualified string Default: qualified
     */
    getLeadersGoalies(seasonId: number, returnAmount: number, qualified: string): Promise<any>;

    /**
     * Retrieves the top skaters
     * @param seasonId number
     * @param options StatViewTypeConfigOptions
     * Sort options:
     * 'name' => 'name',
     * 'points' => 'points',
     * 'gp' => 'games_played',
     * 'goals' => 'goals',
     * 'position' => 'position',
     * 'team' => 'team_code',
     * 'assists' => 'assists',
     * 'ppgoals' => 'power_play_goals',
     * 'ppassists' => 'power_play_assists',
     * 'shgoals' => 'short_handed_goals',
     * 'gwgoals' => 'game_winning_goals',
     * 'fstgoals' => 'first_goals',
     * 'isgoals' => 'insurance_goals',
     * 'pim' => 'penalty_minutes',
     * 'plusminus' => 'plus_minus',
     * 'shootout' => 'shootouts',
     * 'shassists' => 'short_handed_assists',
     * 'otgoals' => 'overtime_goals',
     * 'ptspg' => 'points_per_game',
     * 'pimpg' => 'penalty_minutes_per_game',
     * 'faceoffs' => 'faceoff_wins',
     * 'rookie' => 'rookie',
     * 'unassisted_goals' => 'unassisted_goals',
     * 'empty_net_goals' => 'empty_net_goals',
     * 'shootout_goals' => 'shootout_goals',
     * 'shootout_attempts' => 'shootout_attempts',
     * 'shootout_winning_goals' => 'shootout_winning_goals',
     * 'shootout_percentage' => 'shootout_percentage',
     * 'shots' => 'shots',
     * 'shooting_percentage' => 'shooting_percentage'
     */
    getTopSkaters(seasonId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the top goalies
     * @param seasonId number
     * @param options StatViewTypeConfigOptions
     * Sort options:
     * 'gp' => 'games_played',
     * 'name' => 'name',
     * 'team' => 'team_code',
     * 'gaa' => 'goals_against_average',
     * 'goalsagainst' => 'goals_against',
     * 'svpct' => 'save_percentage',
     * 'wins'=> 'wins',
     * 'losses'=> 'losses',
     * 'ot_losses'=> 'ot_losses',
     * 'ot_loses'=> 'ot_losses',
     * 'so_losses'=> 'shootout_losses',
     * 'shutouts'=> 'shutouts',
     * 'shootouts'=> 'shootout_wins',
     * 'minutes'=> 'minutes_played',
     * 'saves'=> 'saves',
     * 'shots'=> 'shots',
     * 'rookie' => 'rookie',
     * 'ties' => 'ties',
     * 'shootout_games_played' => 'shootout_games_played',
     * 'shootout_wins' => 'shootout_wins',
     * 'shootout_attempts' => 'shootout_attempts',
     * 'shootout_goals_against' => 'shootout_goals_against',
     * 'shootout_percentage' => 'shootout_percentage'
     */
    getTopGoalies(seasonId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the skaters by team
     * @param seasonId number
     * @param teamId number
     * @param options StatViewTypeConfigOptions
     */
    getSkatersByTeam(seasonId: number, teamId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the goalies by team
     * @param seasonId number
     * @param teamId number
     * @param options StatViewTypeConfigOptions
     */
    getGoaliesByTeam(seasonId: number, teamId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the streaks
     * @param seasonId number
     * @param options StatViewTypeConfigOptions
     */
    getStreaks(seasonId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the transactions
     * @param seasonId number
     * @param options StatViewTypeConfigOptions
     */
    getTransactions(seasonId: number, options?: StatViewTypeConfigOptions): Promise<any>;

    /**
     * Retrieves the playoff
     * @param seasonId number
     */
    getPlayoff(seasonId: number): Promise<any>;

    /**
     * Searches for a person
     * @param searchTerm string
     */
    searchPerson(searchTerm: string): Promise<any>;

    /**
     * Retrieves the game preview
     * @param gameId number
     */
    getGamePreview(gameId: number): Promise<any>;

    /**
     * Retrieves the game play by play
     * @param gameId number
     */
    getGamePlayByPlay(gameId: number): Promise<any>;

    /**
     * Retrieves the game clock
     * @param gameId number
     */
    getGameClock(gameId: number): Promise<any>;

    /**
     * Retrieves the game summary
     * @param gameId number
     */
    getGameSummary(gameId: number): Promise<any>;
}

export interface StatViewTypeConfigOptions {
    /**
     * Defaults to 0
     */
    first?: number;

    /**
     * Defaults to 100
     */
    limit?: number;

    /**
     * Defaults to active
     */
    sort?: string;

    /**
     * Defaults to all
     */
    stat?: string;

    /**
     * Defaults to undefined
     */
    orderDirection?: string;

    /**
     * Defaults to qualified when used
     */
    qualified?: string;
}