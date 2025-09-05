interface PostProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage(props: PostProps) {
  const { slug } = await props.params

  return <div>Post: {slug}</div>
}
