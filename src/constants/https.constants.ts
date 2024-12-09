export function getSportsPath(path: string, sports = 'football') {
  return `${sports}/${path}`
}

export type DefaultSearchParams = {
  page?: number;
  time?: string;
  uuid?: string;
}

export type SingularSearchParams = {
  uuid: string;
}

export type ScheduleDateSearchParams = {
  tsp: number;
  date: string;
}

export type ScheduleSeasonSearchParams = {
  uuid: number; // seasonId
}

type BasicInfo = {
  category: string;
  country: string;
  competitionsOrCompetitionId: string;
  teamsOrTeamId: string;
  playersOrPlayerId: string;
  coachesOrCoachId: string;
  refereesOrRefereeId: string;
  venuesOrVenueId: string;
  seasonsOrSeasonId: string;
  stagesOrStageId: string;
};
type BasicData = {
  fullMatchData: string;
  scheduleByDate: string;
  scheduleBySeasonId: string;
  realTimeScore: string;
  matchIdTrendDetails: string;
  singleMatchIdLineup: string;
  playerStats: string;
  teamStats: string;
  matchIdH2HAnalysis: string;
  seasonRankingTableDetail: string;
  completedMatchIdHistory: string;
  playerIdStatsHistory: string;
  teamIdStatsHistory: string;
  historicalCompensationList: string;
  realTimeStandings: string;
  deletedDataList: string;
};
type SportsConfig = Record<string, { basicInfo: BasicInfo; basicData: BasicData }>;
type UrlPaths = {
  basic_info: Record<string, BasicInfo>;
  basic_data: Record<string, BasicData>;
};

const sportsConfig: SportsConfig = {
  football: {
    basicInfo: {
      category: 'category/list',
      country: 'country/list',
      competitionsOrCompetitionId: 'competition/additional/list',
      teamsOrTeamId: 'team/additional/list',
      playersOrPlayerId: 'player/with_stat/list',
      coachesOrCoachId: 'coach/list',
      refereesOrRefereeId: 'referee/list',
      venuesOrVenueId: 'venue/list',
      seasonsOrSeasonId: 'season/list',
      stagesOrStageId: 'stage/list',
    },
    basicData: {
      fullMatchData: 'match/recent/list',
      scheduleByDate: 'match/diary',
      scheduleBySeasonId: 'match/season/recent',
      realTimeScore: 'match/detail_live',
      matchIdTrendDetails: 'match/trend/detail',
      singleMatchIdLineup: 'match/lineup/detail',
      playerStats: 'match/player_stats/list',
      teamStats: 'match/team_stats/list',
      matchIdH2HAnalysis: 'match/analysis',
      seasonRankingTableDetail: 'season/recent/table/detail',
      completedMatchIdHistory: 'match/live/history',
      playerIdStatsHistory: 'match/player_stats/detail',
      teamIdStatsHistory: 'match/team_stats/detail',
      historicalCompensationList: 'compensation/list',
      realTimeStandings: 'table/live',
      deletedDataList: 'deleted',
    },
  },
  basketball: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  tennis: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  esports: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  volleyball: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  baseball: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  cricket: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  ice_hockey: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  handball: {
    basicInfo: {
      category: "",
      country: "",
      competition: "",
      team: "",
      playersOrPlayerId: "",
      coach: "",
      referee: "",
      venue: "",
      season: "",
      stage: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  water_polo: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  badminton: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  table_tennis: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  snooker: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
  american_football: {
    basicInfo: {
      category: "",
      country: "",
      competitionsOrCompetitionId: "",
      teamsOrTeamId: "",
      playersOrPlayerId: "",
      coachesOrCoachId: "",
      refereesOrRefereeId: "",
      venuesOrVenueId: "",
      seasonsOrSeasonId: "",
      stagesOrStageId: ""
    },
    basicData: {
      fullMatchData: "",
      scheduleByDate: "",
      scheduleBySeasonId: "",
      realTimeScore: "",
      matchIdTrendDetails: "",
      singleMatchIdLineup: "",
      playerStats: "",
      teamStats: "",
      matchIdH2HAnalysis: "",
      seasonRankingTableDetail: "",
      completedMatchIdHistory: "",
      playerIdStatsHistory: "",
      teamIdStatsHistory: "",
      historicalCompensationList: "",
      realTimeStandings: "",
      deletedDataList: ""
    },
  },
};

const createSportsPaths = (sport: string, endpoints: BasicInfo | BasicData) => {
  return Object.entries(endpoints).reduce((paths, [nickname, endpoint]) => {
    paths[nickname] = getSportsPath(endpoint, sport);
    return paths;
  }, {} as Record<string, string>);
};

export const urlPaths: UrlPaths = Object.keys(sportsConfig).reduce((urlPaths, sport: string) => {

  const basicInfoPaths = createSportsPaths(sport, sportsConfig[sport].basicInfo);
  const basicDataPaths = createSportsPaths(sport, sportsConfig[sport].basicData);

  urlPaths.basic_info[sport] = basicInfoPaths;
  urlPaths.basic_data[sport] = basicDataPaths;

  return urlPaths;
}, { basic_info: {} as Record<string, BasicInfo>, basic_data: {} as Record<string, BasicData> });
