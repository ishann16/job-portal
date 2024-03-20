import Link from "next/link";
import JobBoard from "../components/JobBoard";



export default function UpdateJob() {
  return (
    <div>
        <h1>Update Page</h1>
        <Link href="/update-job/job1id">Job 1</Link>
    </div>
  );
}
