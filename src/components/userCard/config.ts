import {User} from '../../types/common';

export const userProperties = [
  {
    label: 'Name',
    value: (userData: User) =>
      `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
  },
  {
    label: 'Email',
    value: (userData: User) => userData.email,
  },
  {
    label: 'Address',
    value: (userData: User) =>
      `${userData.location.street.name} ${userData.location.street.number}, ${userData.location.city}, ${userData.location.country}`,
  },
  {
    label: 'ID',
    value: (userData: User) => userData.id?.value ?? userData.login?.uuid,
  },
];
