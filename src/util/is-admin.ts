const admins = [
  'arthur.joppart@gmail.com'
];

export const isAdmin = (email: string | null | undefined): boolean => {
  return !!email && admins.includes(email);
}