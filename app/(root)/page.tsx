import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<>
			<section className="card-cta">
				<div className="flex flex-col gap-6 max-w-lg">
					<h2>Get Interview Ready with AI powered practice and feedback</h2>
					<p className="text-lg">
						Practice on real interview and get instant feedback
					</p>
					<Button asChild className="btn-primary">
						<Link href="/sign-up">Start an Interview</Link>
					</Button>
				</div>

				<Image
					src="/robot.png"
					alt="Robot Image"
					width={400}
					height={400}
					className="max-sm:hidden"
				/>
			</section>

			<section className="flex flex-col gap-6 mt-6">
				<h2>Your Interviews</h2>

				<div className="interviews-section">
					{dummyInterviews.map((interview) => (
						<InterviewCard key={interview.id} {...interview} />
					))}
				</div>
			</section>

			<section className="flex flex-col gap-6 mt-8">
				<h2>Take an Interview</h2>

				<div className="interviews-section">
					{dummyInterviews.map((interview) => (
						<InterviewCard key={interview.id} {...interview} />
					))}
					<p>There are no interviews available</p>
				</div>
			</section>
		</>
	);
};

export default page;
