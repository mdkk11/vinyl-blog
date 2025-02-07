export const PathMap = {
  home: () => '/',
  allPosts: () => '/blog/all',
  vinylPosts: () => '/blog/vinyl',
  zennPosts: () => '/blog/zenn',
  postDetail: (id: string) => `/blog/${id}`,
  allTags: () => '/tags',
  tagsPosts: (tag: string) => `/tags/${tag}`,
} as const

export const PostsNavPaths = [
  { href: PathMap.allPosts(), title: 'All' },
  { href: PathMap.vinylPosts(), title: 'Vinyl' },
  { href: PathMap.zennPosts(), title: 'Zenn' },
] as const satisfies readonly Path[]

export const HeaderNavPaths = [
  { href: PathMap.home(), title: 'Home' },
  { href: PathMap.allPosts(), title: 'Posts' },
  { href: PathMap.allTags(), title: 'Tags' },
] as const satisfies readonly Path[]

export type Path = { href: string; title: string }
