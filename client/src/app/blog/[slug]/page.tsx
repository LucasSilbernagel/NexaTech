import CommonWrapper from '@/app/components/CommonWrapper'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <CommonWrapper>
      <div>My Post: {params.slug}</div>
    </CommonWrapper>
  )
}
