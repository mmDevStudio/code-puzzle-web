import getUserInitials from '@/lib/getUserInitials'

type UserAvatarProps = {
  username: string
  avatar: string
}

export default function UserAvatar({ username, avatar }: UserAvatarProps) {
  return getUserInitials(username)
}
