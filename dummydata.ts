import { JobsDataType } from "@types";
// updated git origin
type SearchResult = {
	totalHitCount: number;
	searchResults: JobsDataType[];
};

const SingleJobs:JobsDataType = {
	id: "7d0912d5-3822-4de5-a033-d277bf037426",
	title: "Data Scientist",
	description: "Conduct research on past cases. Documentation of all Legal proceedings.",
	industryTypes: ["information technology"],
	postedBy: {
		id: "c45e002d-a8ce-4579-a64e-204abfb29dda",
		title: "Chicago Scholars"
	},
	companyName: {
		id: "52708607-4715-4ed6-a138-89750acaf79a",
		title: "Google"
	},
	employmentType: ["Full time"],
	roleName: "Grade-1",
	minExperienceRequired: "1y",
	maxExperienceRequired: "3y",
	keyResponsibilities: "Conduct research. Prepare proposal. Schedule meetings",
	jobLocation : [{
		city: "Mountain View",
		country: "USA",
		zipCode: 94039,
		address: "No: 34, Mountain View",
		noOfOpenPositions: 5
	}],
	salary: {
		type: "Annual",
		salary: 35000,
		minSalary: 30000,
		maxSalary: 45000,
		currency: "USD"
	},
	noticePeriodInDays: 30,
	lastDateToApply: "15-07-2022",
	postedDate: "15-05-2022",
	educationalQualificationRequired: "Bachelors",
	elgibleClassYear: "Graduate Students",
	GPARequirement: null,
	requiredSkills: [{
		title: "Java",
		level: "Expert"
	}, {
		title: "Spring Framework",
		level: "Expert"
	}]
};



export const jobsData:SearchResult = {
	"totalHitCount": 15,
	"searchResults": Array(5).fill(SingleJobs).map((job, idx:number) => ({
		...job,
		id: job.id + idx,
		companyName: { ...job.companyName, title: ['Google', 'IBM', 'Microsoft', 'Netflix', 'STEMuli Studios'][idx]},
		title: ['Data Scientist', 'Software Engineer', 'Web Developer', 'Front End', 'Back End'][idx]
	}))
}
