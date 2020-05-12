export type AccountStatus = 'active' | 'inactive' | 'unknown' | 'hidden';

export interface Account {
  name: string;
  status: AccountStatus;
}
