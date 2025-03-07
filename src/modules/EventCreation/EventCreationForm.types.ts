import { EventDetailsHttp } from '@/__generated__/graphql';

export interface EventCreationFormInputs extends Omit<EventDetailsHttp, '__typename'> {
  // Add any additional fields here
}

