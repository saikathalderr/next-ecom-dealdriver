function Skeleton() {
  return (
    <div className="card card-compact w-full shadow">
      <figure className="relative h-40 w-full rounded-2xl rounded-b-none">
        <div className="h-full w-full animate-pulse bg-base-300"></div>
      </figure>
      <div className="card-body gap-1">
        <div className="flex flex-col gap-2">
          <div className="flex h-5 w-4/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          <div className="flex h-5 w-2/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          <div className="flex h-5 w-1/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
        </div>
        <div className="py-1"></div>
        <div className="flex gap-2">
          <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
