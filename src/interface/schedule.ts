export interface ScheduleByDateResponse {
  code: number
  query: Query
  results: Result[]
}

export interface Query {
  total: number
  type: string
}

export interface Result {
  id: string
  season_id: string
  competition_id: string
  home_team_id: string
  away_team_id: string
  status_id: number
  match_time: number
  venue_id: string
  referee_id: string
  neutral: number
  note: string
  home_scores: number[]
  away_scores: number[]
  home_position: string
  away_position: string
  coverage: Coverage
  round: Round
  environment: Environment
  updated_at: number
}

export interface Coverage {
  mlive: number
  lineup: number
}

export interface Round {
  stage_id: string
  round_num: number
  group_num: number
}

export interface Environment {
  weather: number
  pressure: string
  temperature: string
  wind: string
  humidity: string
}
