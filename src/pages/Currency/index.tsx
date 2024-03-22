/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:45
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-23 01:18:54
 * @FilePath: \summon-war-cms-fe\src\pages\Currency\index.tsx
 */
import { AGetList } from '@/service/currency'
import { useEffect } from 'react'
const Currency: React.FC = () => {
  useEffect(() => {
    AGetList({ version_id: 0 }).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Currency</div>
}
export default Currency
