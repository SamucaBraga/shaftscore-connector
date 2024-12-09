import { httpsApi } from "./lib/https"
import dayjs from "dayjs"
import { urlPaths, DefaultSearchParams } from "@/constants/https.constants"
import { ScheduleByDateResponse } from "./interface/schedule"
import { FullMatchDataResponse } from "./interface/fullMatchData"

export async function testing() {
  const date = dayjs().format('YYYYMMDD')
  const timestamp = dayjs().format('X')
  const searchParams = {
    // uuid: 'p3glrw7he0gqdyj'
    date,
    tsp: timestamp
  }
  const response = await httpsApi
    .get(urlPaths.basic_data.football.scheduleByDate, { searchParams })
    .json<ScheduleByDateResponse>()

  const first = response.results[0]

  const competition = await httpsApi
    .get(urlPaths.basic_info.football.competitionsOrCompetitionId, { searchParams: { uuid: first.competition_id } })
    .json()

  console.log(competition)

  return competition

  // const response = await httpsApi
  //   .get(urlPaths.basic_data.football.fullMatchData, { searchParams: { time: timestamp } })
  //   .json<FullMatchDataResponse>()

  // const first = response.results[0]

  // const matchTime = dayjs.unix(first.match_time).format('YYYY-MM-DD HH:mm:ss')

  // console.log(matchTime)

  // return response

}