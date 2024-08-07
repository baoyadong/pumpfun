'use client'

import { Stack, Tabs, Tab } from "@mui/material"
import { PumpCoin } from "common/types"
import CoinCard from "./item"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

function List({ data }: { data: PumpCoin[] }) {
  const [tabValue, setTabValue] = useState("5min");
  const [coinList, setCoinList] = useState([]);

  const handleChange = (e: any, val: string) => {
    setTabValue(val)
  }

  useEffect(()=> {
    const todayTime = dayjs().startOf("d").valueOf();
    switch(tabValue) {
      case "5min":
        const cur = dayjs().valueOf();
        const curList = data.filter(item => cur - item.created_timestamp * 1000 <= 5 * 60 * 1000)
        setCoinList(curList);
        break;
      case "today":
        const todayList = data.filter(item => item.created_timestamp * 1000 > todayTime)
        setCoinList(todayList)
        break;
      default:
        const otherList = data.filter(item => item.created_timestamp * 1000 < todayTime)
        setCoinList(otherList);
        break;
    }
  }, [data, tabValue])


  return (
    <div>
      <Tabs onChange={handleChange} value={tabValue}>
        <Tab value="5min" label="5分钟之内"/>
        <Tab value="today" label="今天"/>
        <Tab value="other" label="之前" />
      </Tabs>
      <Stack p={1.5} direction="row" flexWrap="wrap" gap={1.5}>
        {coinList.map(t => (
          <CoinCard key={t.address} data={t} />
        ))}
      </Stack>
    </div>
  )
}


export default List;