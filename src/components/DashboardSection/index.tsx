import { mdiAccountMultiple, mdiChartTimelineVariant, mdiCurrencyBdt } from '@mdi/js'
import React, { useEffect } from 'react'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBoxWidget from '../CardBox/Widget'
import CardBox from '../CardBox'
import { AnyObject } from '../apis/api_types'
import CustomBarChart from '../Charts/CustomBarChart'

export default function DashboardSection() {
  const { getItems, result, isLoading, isError } = useApiSlice({})
  const {
    transaction_stats = [],
    user_stats = {},
    total_toll_amount_collected = 0,
    number_of_toll_collected = 0,
  } = result.data as AnyObject
  const { REGULAR_USER } = user_stats as AnyObject

  useEffect(() => {
    getItems({ endPoint: 'dashboard/all' })
  }, [getItems])

  return (
    <Suspender isError={isError} isLoading={isLoading}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trendType="up"
          trendColor="success"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={REGULAR_USER as number}
          label="Users"
        />
        <CardBoxWidget
          trendType="down"
          trendColor="danger"
          icon={mdiCurrencyBdt}
          iconColor="info"
          number={total_toll_amount_collected as number}
          numberPrefix="TK-"
          label="Total Toll Amount"
        />
        <CardBoxWidget
          trendType="warning"
          trendColor="warning"
          icon={mdiChartTimelineVariant}
          iconColor="danger"
          number={number_of_toll_collected as number}
          label="Total Toll Number"
        />
      </div>

      <>
        <CardBox className="mb-6">
          {transaction_stats && <CustomBarChart chartData={transaction_stats as []} />}
        </CardBox>
      </>
    </Suspender>
  )
}
