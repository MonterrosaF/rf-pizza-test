import { Store } from './store.interface';
import { User } from './user.interface';

export interface Response {
  response: {
    users: User[];
    stores: Store[];
  };
}
