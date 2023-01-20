export const formatNum = item => {
    return item?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const priceCurrency = 'MMK'