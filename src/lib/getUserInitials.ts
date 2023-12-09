/** Returns two first letters of the username */
export default function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(' ')

  if (lastName) return `${firstName[0]}${lastName[0]}`

  return firstName.slice(0, 2)
}
