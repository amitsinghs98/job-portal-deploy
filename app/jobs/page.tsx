import JobCard from '../../components/JobCard'

export default function JobsPage() {
  const jobs = [
    { id: '1', title: 'Cloud Engineer', company: 'TechCorp', location: 'Remote' },
    { id: '2', title: 'DevOps Engineer', company: 'CloudWorks', location: 'Bangalore' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="grid gap-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}