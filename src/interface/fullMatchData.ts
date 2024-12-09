export interface FullMatchDataResponse {

  code: number;
  query: QueryInfo;
  results: MatchResult[];

}

interface QueryInfo {
  total: number;
  type: string;
  page: number;
}

interface MatchResult {
  id: string;
  season_id: string;
  competition_id: string;
  home_team_id: string;
  away_team_id: string;
  status_id: number;
  match_time: number;
  venue_id: string;
  referee_id: string;
  neutral: number;
  note: string;
  home_scores: number[];
  away_scores: number[];
  home_position: string;
  away_position: string;
  coverage: CoverageInfo;
  round: RoundInfo;
  updated_at: number;
}

interface CoverageInfo {
  mlive: number;
  lineup: number;
}

interface RoundInfo {
  stage_id: string;
  round_num: number;
  group_num: number;
}
