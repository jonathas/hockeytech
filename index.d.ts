export default class HockeyTech {
    /**
     * Constructor
     * @param key string
     * @param clientCode string
     * @param language string Examples: en, fr
     * @param proxyBaseUrl string Example: http://localhost:3001/proxy?url=
     */
    constructor(key: string, clientCode: string, language?: string, proxyBaseUrl?: string);

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
     * Retrieves the client code
     */
    getClientCode(): string;

    /**
     * Retrieves the daily schedule
     * @param fetchDate string Date format: YYYY-MM-DD
     */
    getDailySchedule(fetchDate: string): Promise<DailyScheduleResponse>;

    /**
     * Retrieves how many games per day
     * @param startDate string
     * @param endDate string
     */
    getGamesPerDay(startDate: string, endDate: string): Promise<GamesPerDayResponse>;

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
    getScorebar(numberOfDaysAhead: number, numberOfDaysBack: number): Promise<ScorebarResponse>;

    /**
     * Retrieves the Player Profile => Bio (Header section)
     * @param playerId number
     */
    getPlayerProfileBio(playerId: number): Promise<SiteKitPlayerBioResponse>;

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
    getPlayerProfileStatsBySeason(playerId: number): Promise<SiteKitPlayerStatsBySeasonResponse>;

    /**
     * Retrieves the player's game by game stats
     * @param playerId number
     */
    getPlayerProfileGameByGameStats(playerId: number): Promise<any>;

    /**
     * Retrieves the player's current season stats
     * @param playerId number
     */
    getPlayerProfileCurrentSeasonStats(playerId: number): Promise<SiteKitPlayerCurrentSeasonStatsResponse>;

    /**
     * Retrieves the season list
     */
    getSeasonList(): Promise<SeasonListResponse>;

    /**
     * Retrieves the teams by season
     * @param seasonId number
     */
    getTeamsBySeason(seasonId: number): Promise<TeamsBySeasonResponse>;

    /**
     * Retrieves the season schedule.
     * The teamId parameter is optional
     * @param seasonId number
     * @param teamId number
     */
    getSeasonSchedule(seasonId: number, teamId?: number): Promise<SeasonScheduleResponse>;

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
    searchPerson(searchTerm: string): Promise<SiteKitSearchPlayersResponse>;

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
    getGameSummary(gameId: number): Promise<GameSummaryResponse>;
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

export interface Parameters {
    feed: string;
    view: string;
    key: string;
    fmt: string;
    client_code: string;
    lang: string;
    league_code: string;
    lang_id: number;
    league_id: string;
    season_id: string;
    team_id?: string;
}

export interface Season {
    season_id: string;
    season_name: string;
    shortname: string;
    career: string;
    playoff: string;
    start_date: string;
    end_date: string;
}

export interface Copyright {
    required_copyright: string;
    required_link: string;
    powered_by: string;
    powered_by_url: string;
}

export interface SiteKit {
    Parameters: Parameters;
    Copyright: Copyright;
}

export interface SiteKitSeasons extends SiteKit {
    Seasons: Season[];
}

export interface SeasonListResponse {
    SiteKit: SiteKitSeasons;
}

export interface TeamsBySeason {
    id: string;
    name: string;
    city: string;
    code: string;
    nickname: string;
    team_caption: string;
    division_id: string;
    division_long_name: string;
    division_short_name: string;
    team_logo_url: string;
}

export interface SiteKitTeamsBySeason extends SiteKit {
    Teamsbyseason: TeamsBySeason[];
}

export interface TeamsBySeasonResponse {
    SiteKit: SiteKitTeamsBySeason;
}

export interface Schedule {
    id: string;
    game_id: string;
    season_id: string;
    quick_score: string;
    date_played: string;
    date: string;
    date_with_day: string;
    date_time_played: Date;
    GameDateISO8601: Date;
    home_team: string;
    visiting_team: string;
    home_goal_count: string;
    visiting_goal_count: string;
    period: string;
    overtime: string;
    schedule_time: string;
    schedule_notes: string;
    game_clock: string;
    timezone: string;
    game_number: string;
    shootout: string;
    attendance: string;
    status: string;
    location: string;
    game_status: string;
    intermission: string;
    game_type: string;
    game_letter: string;
    if_necessary: string;
    period_trans: string;
    started: string;
    final: string;
    tickets_url: string;
    home_audio_url: string;
    home_video_url: string;
    home_webcast_url: string;
    visiting_audio_url: string;
    visiting_video_url: string;
    visiting_webcast_url: string;
    home_team_name: string;
    home_team_code: string;
    home_team_nickname: string;
    home_team_city: string;
    home_team_division_long: string;
    home_team_division_short: string;
    visiting_team_name: string;
    visiting_team_code: string;
    visiting_team_nickname: string;
    visiting_team_city: string;
    visiting_team_division_long: string;
    visiting_team_division_short: string;
    notes_text: string;
    use_shootouts: string;
    venue_name: string;
    venue_url: string;
    venue_location: string;
    last_modified: string;
    client_code: string;
    scheduled_time: string;
    mobile_calendar: string;
}

export interface SiteKitSeasonSchedule {
    Parameters: Parameters;
    Schedule: Schedule[];
    Copyright: Copyright;
}

export interface SeasonScheduleResponse {
    SiteKit: SiteKitSeasonSchedule;
}

export interface GamesPerDay {
    date_played: string;
    month: string;
    year: string;
    dayofweek: string;
    day: string;
    numberofgames: string;
}

export interface SiteKitGamesPerDay {
    Parameters: Parameters;
    Gamesperday: GamesPerDay[];
    Copyright: Copyright;
}

export interface GamesPerDayResponse {
    SiteKit: SiteKitGamesPerDay;
}

export interface SearchPlayersResult {
    person_id: string;
    player_id: string;
    active: string;
    first_name: string;
    last_name: string;
    phonetic_name: string;
    shoots: string;
    catches: string;
    height: string;
    weight: string;
    rawbirthdate: string;
    birthdate: string;
    birthtown: string;
    birthprov: string;
    birthcntry: string;
    team_id: string;
    jersey_number: string;
    role_id: string;
    season_id: string;
    role_name: string;
    all_roles: string;
    last_team_name: string;
    last_team_code: string;
    division: string;
    position: string;
    profile_image: string;
    score: string;
    last_active_date: string;
}

export interface SiteKitSearchPlayers extends SiteKit {
    Searchplayers: SearchPlayersResult[];
}

export interface SiteKitSearchPlayersResponse {
    SiteKit: SiteKitSearchPlayers
}

export interface PlayerBio {
    first_name: string;
    last_name: string;
    jersey_number: string;
    most_recent_team_id: string;
    most_recent_team_name: string;
    most_recent_team_code: string;
    division: string;
    active: string;
    rookie: string;
    position: string;
    height: string;
    weight: string;
    birthdate: string;
    shoots: string;
    catches: string;
    bio: string;
    name: string;
    primary_image: string;
    birthtown: string;
    birthprov: string;
    birthcntry: string;
    hometown: string;
    homeprov: string;
    homecntry: string;
    draft: Array<unknown>,
    draft_type: string;
    careerhigh: string;
    current_team: string;
}

export interface SiteKitPlayerBio extends SiteKit {
    Player: PlayerBio;
}

export interface SiteKitPlayerBioResponse {
    SiteKit: SiteKitPlayerBio
}

export interface PlayerSeasonStat {
    season_id: string;
    season_name: string;
    shortname: string;
    playoff: string;
    career: string;
    max_start_date: string;
    veteran_status: string;
    veteran: string;
    jersey_number: string;
    goals: string;
    games_played: string;
    assists: string;
    points: string;
    plus_minus: string;
    penalty_minutes: string;
    power_play_goals: string;
    power_play_assists: string;
    shots: string;
    shootout_attempts: string;
    shootout_goals: string;
    shootout_percentage: string;
    shooting_percentage: string;
    shootout_winning_goals: string;
    points_per_game: string;
    short_handed_goals: string;
    short_handed_assists: string;
    game_winning_goals: string;
    game_tieing_goals: string;
    faceoff_wins: string;
    faceoff_attempts: string;
    faceoff_pct: string;
    hits: string;
    team_name: string;
    team_code: string;
    team_city: string;
    team_nickname: string;
    team_id: string;
    active: string;
    first_goals: string;
    insurance_goals: string;
    overtime_goals: string;
    unassisted_goals: string;
    empty_net_goals: string;
    penalty_minutes_per_game: string;
    division: string;
}

export interface PlayerSeasonStatTotal {
    season_name: string;
    shortname: string;
    playoff: number;
    season_id: number;
    career: number;
    max_start_date: number;
    veteran_status: number;
    jersey_number: number;
    goals: number;
    games_played: number;
    assists: number;
    points: number;
    plus_minus: number;
    penalty_minutes: number;
    power_play_goals: number;
    power_play_assists: number;
    shots: number;
    shootout_attempts: number;
    shootout_goals: number;
    shootout_percentage: string;
    shooting_percentage: string;
    shootout_winning_goals: number;
    points_per_game: string;
    short_handed_goals: number;
    short_handed_assists: number;
    game_winning_goals: number;
    game_tieing_goals: number;
    faceoff_wins: number;
    faceoff_attempts: number;
    faceoff_pct: number;
    hits: number;
    first_goals: number;
    insurance_goals: number;
    overtime_goals: number;
    unassisted_goals: number;
    empty_net_goals: number;
    penalty_minutes_per_game: string;
}

export interface PlayerStatsBySeason {
    /** Includes a final "Total" object, summarizing the prior elements */
    regular?: Array<PlayerSeasonStat | PlayerSeasonStatTotal>;
    /** Preseason. See `regular` comment */
    exhibition?: Array<PlayerSeasonStat | PlayerSeasonStatTotal>;
    /** Postseason. See `regular` comment */
    playoff?: Array<PlayerSeasonStat | PlayerSeasonStatTotal>;
}

export interface SiteKitPlayerStatsBySeason extends SiteKit {
    Player: PlayerStatsBySeason;
}

export interface SiteKitPlayerStatsBySeasonResponse {
    SiteKit: SiteKitPlayerStatsBySeason
}

export interface PlayerCurrentSeasonStats {
    player_id: string;
    first_name: string;
    last_name: string;
    season_id: string;
    season_name: string;
    team_id: string;
    team_name: string;
    division: string;
    games_played: string;
    game_winning_goals: string;
    game_tieing_goals: string;
    first_goals: string;
    insurance_goals: string;
    unassisted_goals: string;
    empty_net_goals: string;
    overtime_goals: string;
    ice_time: string;
    ice_time_avg: string;
    goals: string;
    shots: string;
    shooting_percentage: string;
    assists: string;
    points: string;
    points_per_game: string;
    plus_minus: string;
    penalty_minutes: string;
    penalty_minutes_per_game: string;
    minor_penalties: string;
    major_penalties: string;
    power_play_goals: string;
    power_play_assists: string;
    power_play_points: string;
    short_handed_goals: string;
    short_handed_assists: string;
    short_handed_points: string;
    shootout_goals: string;
    shootout_attempts: string;
    shootout_winning_goals: string;
    shootout_games_played: string;
    faceoff_attempts: string;
    faceoff_wins: string;
    faceoff_pct: string;
    faceoff_wa: string;
    shots_on: string;
    shootout_percentage: string;
}

export interface SiteKitPlayerCurrentSeasonStats extends SiteKit {
    Player: PlayerCurrentSeasonStats;
}

export interface SiteKitPlayerCurrentSeasonStatsResponse {
    SiteKit: SiteKitPlayerCurrentSeasonStats
}

export interface GoalSummary {
    code: string;
    player_id: string;
    first_name: string;
    last_name: string;
    time: string;
    period_id: string;
    short_name: string;
    long_name: string;
    power_play: string;
    empty_net: string;
    penalty_shot: string;
    short_handed: string;
    game_winning: string;
    insurance_goal: string;
    actual_last_name: string;
}

export interface GoalList {
    code: string;
    player_id: string;
    first_name: string;
    last_name: string;
    time: string;
    period_id: string;
    short_name: string;
    long_name: string;
    power_play: string;
    empty_net: string;
    penalty_shot: string;
    short_handed: string;
    game_winning: string;
    insurance_goal: string;
    actual_last_name: string;
}

export interface HomeStats {
    wins: string;
    losses: string;
    ties: string;
    ot_wins: string;
    ot_losses: string;
    shootout_losses: string;
    points: string;
    use_shootouts: string;
    record: string;
}

export interface VisitingStats {
    wins: string;
    losses: string;
    ties: string;
    ot_wins: string;
    ot_losses: string;
    shootout_losses: string;
    points: string;
    use_shootouts: string;
    record: string;
}

export interface TeamGoalsByPeriod {
    1: string;
    2: string;
    3: string;
}

export interface NumericStatsByPeriod {
    home: {
        1: number;
        2: number;
        3: number;
    };
    visitor: {
        1: number;
        2: number;
        3: number;
    };
}

export interface Period {
    id: string;
    short_name: string;
    long_name: string;
    length: string;
    mandatory: string;
    sort_order?: string;
    period_id?: string;
}

export interface Periods {
    1: Period;
    2: Period;
    3: Period;
}

export interface GamesByDate {
    id: string;
    season_id: string;
    league_id: string;
    home_team: string;
    visiting_team: string;
    game_number: string;
    game_letter: string;
    type_id: string;
    if_necessary: string;
    quick_score: string;
    mvp1: string;
    mvp2: string;
    mvp3: string;
    featured_player_id: string;
    date_played: string;
    schedule_time: string;
    timezone: string;
    start_time: string;
    end_time: string;
    forfeit: string;
    shootout: string;
    shootout_first_shooter_home: string;
    attendance: string;
    location: string;
    home_coach: string;
    home_assistant_coach1: string;
    home_assistant_coach2: string;
    home_manager: string;
    visiting_coach: string;
    visiting_assistant_coach1: string;
    visiting_assistant_coach2: string;
    visiting_manager: string;
    period: string;
    game_clock: string;
    status: string;
    started: string;
    pending_final: string;
    final: string;
    home_goal_count: string;
    visiting_goal_count: string;
    public_notes: string;
    private_notes: string;
    league_game_notes: string;
    home_team_notes: string;
    visiting_team_notes: string;
    capacity: string;
    schedule_notes: string;
    schedule_notes_fr: string;
    home_audio_url: string;
    home_video_url: string;
    home_webcast_url: string;
    home_audio_url_fr: string;
    home_video_url_fr: string;
    home_webcast_url_fr: string;
    visiting_webcast_url: string;
    visiting_video_url: string;
    visiting_audio_url: string;
    visiting_webcast_url_fr: string;
    visiting_video_url_fr: string;
    visiting_audio_url_fr: string;
    tickets_url: string;
    tickets_url_fr: string;
    last_modified: string;
    imported_id: string;
    game_id: string;
    venue: string;
    venue_location: string;
    game_status: string;
    intermission: string;
    home_team_name: string;
    home_team_nickname: string;
    home_team_code: string;
    home_team_city: string;
    visiting_team_name: string;
    visiting_team_nickname: string;
    visiting_team_code: string;
    visiting_team_city: string;
    playoff: string;
    home_stats: HomeStats;
    visiting_stats: VisitingStats;
    date_played_fmt: string;
    home_team_goals_by_period: TeamGoalsByPeriod;
    visiting_team_goals_by_period: TeamGoalsByPeriod;
    home_power_play_goals: string;
    home_power_play_opportunities: string;
    home_power_plays: string;
    visiting_power_play_goals: string;
    visiting_power_play_opportunities: string;
    visiting_power_plays: string;
    home_shots: string;
    visiting_shots: string;
    periods: Periods;
    goal_summary: GoalSummary[];
    goal_list: GoalList[];
}

export interface SiteKitDailySchedule {
    Parameters: Parameters;
    Gamesbydate: GamesByDate[];
    Copyright: Copyright;
}

export interface DailyScheduleResponse {
    SiteKit: SiteKitDailySchedule;
}

export interface Meta {
    id: string;
    season_id: string;
    league_id: string;
    home_team: string;
    visiting_team: string;
    game_number: string;
    game_letter: string;
    type_id: string;
    if_necessary: string;
    quick_score: string;
    mvp1: string;
    mvp2: string;
    mvp3: string;
    featured_player_id: string;
    date_played: string;
    schedule_time: string;
    timezone: string;
    start_time: string;
    end_time: string;
    forfeit: string;
    shootout: string;
    shootout_first_shooter_home: string;
    attendance: string;
    location: string;
    home_coach: string;
    home_assistant_coach1: string;
    home_assistant_coach2: string;
    home_manager: string;
    visiting_coach: string;
    visiting_assistant_coach1: string;
    visiting_assistant_coach2: string;
    visiting_manager: string;
    period: string;
    game_clock: string;
    status: string;
    started: string;
    pending_final: string;
    final: string;
    home_goal_count: string;
    visiting_goal_count: string;
    public_notes: string;
    private_notes: string;
    league_game_notes: string;
    home_team_notes: string;
    visiting_team_notes: string;
    capacity: string;
    schedule_notes: string;
    schedule_notes_fr: string;
    home_audio_url: string;
    home_video_url: string;
    home_webcast_url: string;
    home_audio_url_fr: string;
    home_video_url_fr: string;
    home_webcast_url_fr: string;
    visiting_webcast_url: string;
    visiting_video_url: string;
    visiting_audio_url: string;
    visiting_webcast_url_fr: string;
    visiting_video_url_fr: string;
    visiting_audio_url_fr: string;
    tickets_url: string;
    tickets_url_fr: string;
    last_modified: string;
    imported_id: string;
    start_time_without_seconds: string;
    end_time_without_seconds: string;
    "12_hour_start_time_without_seconds": string;
    "12_hour_end_time_without_seconds": string;
    length: string;
    timezone_short: string;
}

export interface HomeOrVisitor {
    id: string;
    league_id: string;
    code: string;
    team_code: string;
    address1: string;
    address2: string;
    province: string;
    postal: string;
    country: string;
    phone: string;
    fax: string;
    active: string;
    placeholder: string;
    team_id: string;
    lang_id: string;
    season_id: string;
    name: string;
    city: string;
    nickname: string;
    logo_caption: string;
}

export interface Mvp {
    player_id: string;
    first_name: string;
    last_name: string;
    jersey_number: string;
    home: number;
}

export interface Official {
    official_type_id: string;
    description: string;
    first_name: string;
    last_name: string;
    jersey_number: string;
    person_id: string;
}

export interface PlayerBaseInfo {
    player_id: string;
    jersey_number: string;
    first_name: string;
    last_name: string;
}

export interface PlayerInfo extends PlayerBaseInfo {
    team_id: string;
    team_code: string;
}

export interface Penalty {
    event: string;
    time_off_formatted: string;
    team_id: string;
    home: string;
    period_id: string;
    period: string;
    offence: string;
    pp: string;
    bench: string;
    penalty_shot: string;
    minutes: number;
    minutes_formatted: string;
    penalty_class_id: string;
    penalty_class: string;
    lang_penalty_description: string;
    s: number;
    player_penalized_info: PlayerInfo;
    player_served_info: PlayerInfo;
}

export interface Goal {
    event: string;
    x_location: string;
    y_location: string;
    time: string;
    team_id: string;
    home: string;
    period_id: string;
    goal_type: string;
    location_set: string;
    power_play: string;
    empty_net: string;
    penalty_shot: string;
    short_handed: string;
    insurance_goal: string;
    game_winning: string;
    game_tieing: string;
    scorer_goal_num: string;
    s: number;
    goal_scorer: PlayerInfo;
    assist1_player: PlayerInfo;
    assist2_player: PlayerInfo;
    plus: PlayerBaseInfo[];
    minus: PlayerBaseInfo[];
}

export interface Goalies {
    visitor: GoaliesHomeVisitor[];
    home: GoaliesHomeVisitor[];
}

export interface GoaliesHomeVisitor {
    id: string;
    player_id: string;
    first_name: string;
    last_name: string;
    period_start: string;
    time_start: string;
    period_end: string;
    time_end: string;
    saves: string;
    secs: string;
    seconds: string;
    goals_against: string;
    win: string;
    loss: string;
    shootout_loss: string;
    ot_loss: string;
    tie: string;
    shutout: string;
    secs_mmss: string;
    shots_against: number;
}

export interface HomeTeamLineup {
    goalies: Goaly[];
    players: Player[];
}

export interface Goaly {
    person_id: string;
    player_id: string;
    first_name: string;
    last_name: string;
    start: string;
    position: string;
    position_str: string;
    status: string;
    rookie: string;
    seconds: number;
    time: string;
    shots_against: number;
    goals_against: number;
    saves: number;
    goals: number;
    assists: number;
    pim: number;
    jersey_number: string;
}

export interface Player {
    person_id: string;
    player_id: string;
    first_name: string;
    last_name: string;
    start: string;
    position: string;
    position_str: string;
    status: string;
    rookie: string;
    goals: number;
    assists: number;
    plusminus: any;
    pim: number;
    faceoff_wins: string;
    faceoff_attempts: string;
    hits: string;
    shots: string;
    shots_on: string;
    jersey_number: string;
}

export interface VisitorTeamLineup {
    goalies: Goaly[];
    players: Player[];
}

export interface Coaches {
    visitor: Coach[];
    home: Coach[];
}

export interface Coach {
    last_name: string;
    first_name: string;
    description: string;
    coach_type_id: string;
    person_id: string;
}

export interface VisitorAndHomeStats {
    visitor: number;
    home: number;
}

export interface VisitorAndHomeAttWon {
    att: number;
    won: number;
}

export interface Penaltyshots {
    visitor: any[];
    home: any[];
}

export interface TotalFaceoffs {
    visitor: VisitorAndHomeAttWon;
    home: VisitorAndHomeAttWon;
}

export interface GameSummary {
    meta: Meta;
    txt_title: string;
    txt_scoring: string;
    txt_total: string;
    txt_shots: string;
    game_ident: string;
    game_date: string;
    game_length: string;
    status_title: string;
    status_value: string;
    periods: Periods;
    shootout: string;
    visitor: HomeOrVisitor;
    home: HomeOrVisitor;
    mvps: Mvp[];
    venue: string;
    referee1: string;
    referee2: string;
    linesman1: string;
    linesman2: string;
    officialsOnIce: Official[];
    officialsOffIce: Official[];
    shootoutDetail: any[];
    homeShootout: number;
    visitorShootout: number;
    benchGoalCount?: any;
    penalties: Penalty[];
    goals: Goal[];
    goalies: Goalies;
    home_team_lineup: HomeTeamLineup;
    visitor_team_lineup: VisitorTeamLineup;
    game_date_iso_8601: Date;
    coaches: Coaches;
    pimBench: VisitorAndHomeStats;
    powerPlayGoals: VisitorAndHomeStats;
    powerPlayCount: VisitorAndHomeStats;
    goalCount: VisitorAndHomeStats;
    assistCount: VisitorAndHomeStats;
    pointsCount: VisitorAndHomeStats;
    pimTotal: VisitorAndHomeStats;
    infCount: VisitorAndHomeStats;
    shotsByPeriod: NumericStatsByPeriod;
    penaltyshots: Penaltyshots;
    totalFaceoffs: TotalFaceoffs;
    totalHits: VisitorAndHomeStats;
    totalGoals: VisitorAndHomeStats;
    totalShots: VisitorAndHomeStats;
    totalShotsOn: VisitorAndHomeStats;
    goalsByPeriod: NumericStatsByPeriod;
}

export interface GCParameters {
    feed: string;
    key: string;
    client_code: string;
    game_id: string;
    lang_code: string;
    fmt: string;
    tab: string;
    lang_id: number;
    static: number;
}

export interface GCGameSummary {
    Parameters: GCParameters;
    Gamesummary: GameSummary;
}

export interface GameSummaryResponse {
    GC: GCGameSummary;
}

export interface ScorebarMatch {
    ID: string;
    SeasonID: string;
    game_number: string;
    game_letter: string;
    game_type: string;
    quick_score: string;
    Date: string;
    GameDate: string;
    GameDateISO8601: string;
    ScheduledTime: string;
    ScheduledFormattedTime: string;
    Timezone: string;
    TicketUrl: string;
    HomeID: string;
    HomeCode: string;
    HomeCity: string;
    HomeNickname: string;
    HomeLongName: string;
    HomeGoals: string;
    HomeAudioUrl: string;
    HomeVideoUrl: string;
    HomeWebcastUrl: string;
    VisitorID: string;
    VisitorCode: string;
    VisitorCity: string;
    VisitorNickname: string;
    VisitorLongName: string;
    VisitorGoals: string;
    VisitorAudioUrl: string;
    VisitorVideoUrl: string;
    VisitorWebcastUrl: string;
    Period: string;
    PeriodNameShort: string;
    PeriodNameLong: string;
    GameClock: string;
    GameSummaryUrl: string;
    HomeWins: string;
    HomeRegulationLosses: string;
    HomeOTLosses: string;
    HomeShootoutLosses: string;
    VisitorWins: string;
    VisitorRegulationLosses: string;
    VisitorOTLosses: string;
    VisitorShootoutLosses: string;
    /**
     * @param GameStatus 2=In Progress
     */
    GameStatus: string;
    Intermission: string;
    GameStatusString: string;
    GameStatusStringLong: string;
    Ord: string;
    venue_name: string;
    venue_location: string;
    league_name: string;
    league_code: string;
    TimezoneShort: string;
    HomeLogo: string;
    VisitorLogo: string;
}

export interface SiteKitScorebar extends SiteKit {
    Scorebar: ScorebarMatch[];
}

export interface ScorebarResponse {
    SiteKit: SiteKitScorebar;
}
