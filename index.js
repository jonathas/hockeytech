/* global define */
(function (root = {returnExportsGlobal: null}, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.returnExportsGlobal = factory());
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.returnExportsGlobal = factory();
    }

}(this, function () {
    // UMD Definition above, do not remove this line

    // To get to know more about the Universal Module Definition
    // visit: https://github.com/umdjs/umd

    const axios = require('axios').default;

    return class HockeyTech {
        constructor(key, clientCode, language = 'en', proxyBaseUrl = '') {
            this._proxyBaseUrl = proxyBaseUrl;
            this._modulekitBaseUrl = 'https://lscluster.hockeytech.com/feed/';
            this._gameCenterBaseUrl = 'https://cluster.leaguestat.com/feed/';
            this._key = key;
            this._clientCode = clientCode;
            this._language = language;
        }

        setModulekitBaseUrl(modulekitBaseUrl) {
            this._modulekitBaseUrl = modulekitBaseUrl;
        }

        setGameCenterBaseUrl(gameCenterBaseUrl) {
            this._gameCenterBaseUrl = gameCenterBaseUrl;
        }

        setKey(key) {
            this._key = key;
        }

        setClientCode(clientCode) {
            this._clientCode = clientCode;
        }

        setLanguage(language) {
            this._language = language;
        }

        getClientCode() {
            return this._clientCode;
        }

        _getConfig(feed) {
            return {
                params: {
                    feed,
                    key: this._key,
                    fmt: 'json',
                    client_code: this._clientCode
                }
            };
        }

        _getModulekitConfig(view) {
            const config = this._getConfig('modulekit');
            config.params['view'] = view;
            config.params['lang'] = this._language;
            return config;
        }

        _getGameCenterConfig(gameId, tab) {
            const config = this._getConfig('gc');
            config.params['game_id'] = gameId;
            config.params['tab'] = tab;
            config.params['lang_code'] = this._language;
            return config;
        }

        _getEndpoint(baseUrl, config) {
            const endpoint = `${baseUrl}?${new URLSearchParams(config.params)}`;
            return (this._proxyBaseUrl === '') ? endpoint : `${this._proxyBaseUrl}${encodeURIComponent(endpoint)}`;
        }

        async getDailySchedule(fetchDate) {
            const config = this._getModulekitConfig('gamesbydate');
            config.params['fetch_date'] = fetchDate;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getGamesPerDay(startDate, endDate) {
            const config = this._getModulekitConfig('gamesperday');
            config.params['start_date'] = startDate;
            config.params['end_date'] = endDate;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getRoster(seasonId, teamId) {
            const config = this._getModulekitConfig('roster');
            config.params['season_id'] = seasonId;
            config.params['team_id'] = teamId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getScorebar(numberOfDaysAhead, numberOfDaysBack) {
            const config = this._getModulekitConfig('scorebar');
            config.params['numberofdaysahead'] = numberOfDaysAhead;
            config.params['numberofdaysback'] = numberOfDaysBack;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        _getPlayerConfig(playerId) {
            const config = this._getModulekitConfig('player');
            config.params['player_id'] = playerId;
            return config;
        }

        async getPlayerProfileBio(playerId) {
            const config = this._getPlayerConfig(playerId);
            config.params['category'] = 'profile';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getPlayerProfileMedia(personId) {
            const config = this._getModulekitConfig('player');
            config.params['person_id'] = personId; // ????
            config.params['category'] = 'media';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getPlayerProfileStatsBySeason(playerId) {
            const config = this._getPlayerConfig(playerId);
            config.params['category'] = 'seasonstats';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getPlayerProfileGameByGameStats(playerId) {
            const config = this._getPlayerConfig(playerId);
            config.params['category'] = 'gamebygame';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getPlayerProfileCurrentSeasonStats(playerId) {
            const config = this._getPlayerConfig(playerId);
            config.params['category'] = 'mostrecentseasonstats';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getSeasonList() {
            const config = this._getModulekitConfig('seasons');

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getTeamsBySeason(seasonId) {
            const config = this._getModulekitConfig('teamsbyseason');
            config.params['season_id'] = seasonId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getSeasonSchedule(seasonId, teamId = 0) {
            const config = this._getModulekitConfig('schedule');
            config.params['season_id'] = seasonId;

            if (teamId && teamId !== 0) {
                config.params['team_id'] = teamId;
            }

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getStandingTypes(seasonId) {
            const config = this._getModulekitConfig('standingtypes');
            config.params['season_id'] = seasonId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getStandings(seasonId, stat = 'conference', standingType = 'standings') {
            const config = this._getModulekitConfig('statviewtype');
            config.params['season_id'] = seasonId;
            config.params['stat'] = stat;
            config.params['type'] = standingType;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        _getLeadersConfig(seasonId, returnAmount, qualified) {
            const config = this._getModulekitConfig('combinedplayers');
            config.params['season_id'] = seasonId;
            config.params['return_amount'] = returnAmount;
            config.params['qualified'] = qualified;
            return config;
        }

        async getLeadersSkaters(seasonId, returnAmount = 5, qualified = 'all') {
            const config = this._getLeadersConfig(seasonId, returnAmount, qualified);
            config.params['type'] = 'skaters';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getLeadersGoalies(seasonId, returnAmount = 5, qualified = 'qualified') {
            const config = this._getLeadersConfig(seasonId, returnAmount, qualified);
            config.params['type'] = 'goalies';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        _getStatViewTypeConfig(seasonId, statType, options = {}) {
            const config = this._getModulekitConfig('statviewtype');
            config.params['season_id'] = seasonId;
            config.params['type'] = statType;
            config.params['first'] = options.first || 0;
            config.params['limit'] = options.limit || 100;
            config.params['sort'] = options.sort || 'active';
            config.params['stat'] = options.stat || 'all';
            config.params['order_direction'] = options.orderDirection;
            return config;
        }

        async getTopSkaters(seasonId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'topscorers', options);
            config.params['qualified'] = options.qualified || 'qualified';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getTopGoalies(seasonId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'topgoalies', options);
            config.params['qualified'] = options.qualified || 'qualified';

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getSkatersByTeam(seasonId, teamId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'skaters', options);
            config.params['team_id'] = teamId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getGoaliesByTeam(seasonId, teamId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'goalies', options);
            config.params['team_id'] = teamId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getStreaks(seasonId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'streaks', options);

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getTransactions(seasonId, options = {}) {
            const config = this._getStatViewTypeConfig(seasonId, 'transactions', options);

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getPlayoff(seasonId) {
            const config = this._getModulekitConfig('brackets');
            config.params['season_id'] = seasonId;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async searchPerson(searchTerm) {
            const config = this._getModulekitConfig('searchplayers');
            config.params['search_term'] = searchTerm;

            const res = await axios.get(this._getEndpoint(this._modulekitBaseUrl, config));
            return res.data;
        }

        async getGamePreview(gameId) {
            const config = this._getGameCenterConfig(gameId, 'preview');
            const res = await axios.get(this._getEndpoint(this._gameCenterBaseUrl, config));
            return res.data;
        }

        async getGamePlayByPlay(gameId) {
            const config = this._getGameCenterConfig(gameId, 'pxpverbose');
            const res = await axios.get(this._getEndpoint(this._gameCenterBaseUrl, config));
            return res.data;
        }

        async getGameClock(gameId) {
            const config = this._getGameCenterConfig(gameId, 'clock');
            const res = await axios.get(this._getEndpoint(this._gameCenterBaseUrl, config));
            return res.data;
        }

        async getGameSummary(gameId) {
            const config = this._getGameCenterConfig(gameId, 'gamesummary');
            const res = await axios.get(this._getEndpoint(this._gameCenterBaseUrl, config));
            return res.data;
        }
    };
}));