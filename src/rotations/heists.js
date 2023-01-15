import dayjs from 'dayjs'
// https://kyberscorner.com/destiny2/heist-battlegrounds-legend/

const startDate = dayjs('12-20-2022')
const seasonEndDate = dayjs('02-28-2023')

const rotation = ['Europa', 'Moon', 'Mars']

export const getLegendHeist = (date) => {
    const queryDate = dayjs(date)
    const diff = queryDate.diff(startDate, 'week')
    const heist = rotation[diff % rotation.length]

    const remainingWeeks = seasonEndDate.diff(queryDate, 'week')
    return { heist, remaining: Math.floor(remainingWeeks / 3) + 1 }

}