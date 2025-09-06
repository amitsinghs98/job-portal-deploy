interface JobDetailProps {
  params: { id: string }
}

export default function JobDetail({ params }: JobDetailProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Job Detail - {params.id}</h1>
      <p>More info about the job will be displayed here.</p>
    </div>
  )
}
