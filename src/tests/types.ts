/* eslint-disable @typescript-eslint/ban-ts-comment */

'use strict';

import { PartialDeep, ReadonlyDeep } from '../../lib';

type User = {
  firstname: string;
  lastname: string;
};

const user: User = {
  firstname: '',
  lastname: '',
};

export default (): void => {
  // INFO: This should inspect "firstname: string | undefined"
  const userDeepPartial: PartialDeep<{ user: User | null }> = { user };
  userDeepPartial.user?.firstname;

  // INFO: This should warn "TS2540: Cannot assign to 'firstname' because it is a read-only property."
  const userDeepReadonly: ReadonlyDeep<{ user: User | null }> = { user };
  if (userDeepReadonly.user?.firstname) {
    // @ts-ignore
    userDeepReadonly.user.firstname = '';
  }
};
