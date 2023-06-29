const mapping: Record<string, string> = {
  moderators: 'moderator',
  organizations: 'organization',
  'registered-users': 'registered_user',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
