import Link from 'next/link'

export default function JobCard({ job }: { job: any }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <Link href={`/jobs/${job.id}`} className="text-blue-600">View Details</Link>
    </div>
  )
}