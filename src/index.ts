import { Locker, LockerConfig } from './Locker'
export { Locker, LockerConfig };

// angular-cli
export default {
  providers: [LockerConfig, Locker]
}

export * from './Driver'
export * from './IStorage'
export { LockerModule } from './Locker.module'
