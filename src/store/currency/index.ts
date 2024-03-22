/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:58:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-22 16:12:41
 * @FilePath: \summon-war-cms-fe\src\store\currency\index.ts
 */
import { makeAutoObservable } from 'mobx'

class Currency {
  constructor() {
    makeAutoObservable(this)
  }
}
export default new Currency()
