import {User, UserProperty} from '../../types/common';

export const userProperties: UserProperty[] = [
  {
    label: '',
    key: 'name',
    value: (userData: User) =>
      `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
    editable: true,
  },
  {
    label: 'Email: ',
    key: 'email',
    value: (userData: User) => userData.email,
    editable: true,
  },
  {
    label: 'Address: ',
    key: 'location',
    value: (userData: User) =>
      userData.location.country === ''
        ? userData.location.city
        : `${userData.location.street.name} ${userData.location.street.number}, ${userData.location.city}, ${userData.location.country}`,
    editable: true,
  },

  {
    label: 'ID: ',
    key: 'id',
    value: (userData: User) => userData.id?.value ?? userData.login?.uuid,
    editable: false,
  },
];
