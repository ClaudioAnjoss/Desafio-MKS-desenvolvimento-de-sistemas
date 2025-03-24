import { Skeleton } from '../ui/skeleton'

export default function SkeletonCard() {
  return (
    <div className="w-[217px] h-[285px] flex flex-col space-y-3 border p-2 rounded-2xl">
      <Skeleton className="h-full rounded-xl" />
      <div className="space-y-2 flex flex-col items-center gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <Skeleton className="h-4 w-[200px]" key={index} />
        ))}
      </div>
    </div>
  )
}
