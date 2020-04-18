/* eslint-disable no-array-constructor */
import { RawRule } from '@casl/ability'
import { permission } from '../api/types'
import _ from 'lodash'
import { Common } from '../constants/common'
export function ConvertAbility(permissions: permission[]): RawRule[] {
  let abilities = new Array<RawRule>()
  permissions.forEach(m => {
    let filteredPermission = _.omit(m, [Common.Module])
    _.forIn(filteredPermission, function(value: any, key: any) {
      if (value.toString() === 'true') {
        abilities.push({
          subject: m.Module,
          actions: key
        })
      }
    })
  })
  return abilities
}
