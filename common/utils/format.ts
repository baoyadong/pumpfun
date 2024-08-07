import dayjs from "dayjs"

export function formatMarketCap(val: any){
  if(!val){
    return "0"
  }
  if(val < 1000){
    return parseFloat(val).toFixed(2)
  }
  return (parseFloat(val) / 1000).toFixed(2) + "k"
}

export function formatTime(time: number){
  return dayjs(time * 1000).format("MM-DD HH:mm")
}

export function formatAddress(addr: string){
  return addr.substring(0, 5) + "..." + addr.substr(-4)
}

export function formatPrice(price: string){
  return parseFloat(price).toFixed(8)
}

export function formatPercent(val: string | number){
  return (Number(val) * 100).toFixed(2) + "%"
}
