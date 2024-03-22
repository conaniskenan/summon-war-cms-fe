/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:58:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-22 16:12:28
 * @FilePath: \summon-war-cms-fe\src\store\version\index.ts
 */
import { makeAutoObservable } from 'mobx'

class Version {
  constructor() {
    makeAutoObservable(this)
  }
}
export default new Version()
