import Link from "next/link";

export default function JobDescription({ job, index }) {
    return <div>
        <ul>
            <li>published at: {job.publishedAt}</li>
            <li>salary: {job.salary}</li>
            <li>title: {job.title}</li>
            <li>job url: <Link href={job.jobUrl}>{job.jobUrl}</Link></li>
            <li>company name: {job.companyName}</li>
            <li>company url: <Link href={job.companyUrl}>{job.companyUrl}</Link></li>
            <li>location: {job.location}</li>
            <li>posted time: {job.postedTime}</li>
            <li>applications count: {job.applicationsCount}</li>
            <li>description: {job.description}</li>
            <li>contract type: {job.contractType}</li>
            <li>experience level: {job.experienceLevel}</li>
            <li>workType: {job.workType}</li>
            <li>sector: {job.sector}</li>
            <li>company id: {job.companyId}</li>
            <li>poster profile url: {job.posterProfileUrl}</li>
            <li>poster full name: {job.posterFullName}</li>
        </ul>
    </div>
}