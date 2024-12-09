import { ResourceNotFoundError } from '../errors/resource-not-found-error'

export class FindOddsUseCase {
  constructor() { }

  async execute({
  }: {
    }): Promise<{ odds: Partial<Odd>[] | null, count: number }> {
    // const odds = await this.oddsRepository.findOddsByCustomerId(customerId, pagination)

    // if (!odds) throw new ResourceNotFoundError()

    // const oddsCount = await this.oddsRepository.countOddsByCustomerId(customerId)

    // return {
    //   odds,
    //   count: oddsCount
    // }
  }
}
