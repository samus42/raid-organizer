import dayjs from 'dayjs'
// https://kyberscorner.com/destiny2/heist-battlegrounds-legend/

const startDate = dayjs('2022-04-28')
const seasonEndDate = dayjs('2023-05-22')

const rotation = ['EDZ', 'Cosmodrome', 'Orbital Station']

export const getLegendActivity = (date) => {
    const queryDate = dayjs(date)
    const diff = queryDate.diff(startDate, 'week')
    const heist = rotation[diff % rotation.length]

    const remainingWeeks = seasonEndDate.diff(queryDate, 'week')
    return { heist, remaining: Math.floor(remainingWeeks / 3) + 1 }

}