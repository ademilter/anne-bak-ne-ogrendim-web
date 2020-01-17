export type User = {
  id: 1
  username: 'adem'
  email: 'example@x.com'
  provider: 'github'
  confirmed: null
  blocked: null
  role: 1
  created_at: '2020-01-16T13:11:40.292Z'
  updated_at: '2020-01-16T13:11:40.298Z'
}

export type Tag = {
  id: 1
  name: 'css'
  slug: 'css-1'
  created_at: '2020-01-16T12:32:20.182Z'
  updated_at: '2020-01-16T12:32:20.182Z'
}

export type Article = {
  id: 1
  title: 'title'
  slug: 'title-1-2'
  created_at: '2020-01-16T17:36:17.903Z'
  updated_at: '2020-01-16T18:54:54.066Z'
  user: User
  tags: Tag[]
}
