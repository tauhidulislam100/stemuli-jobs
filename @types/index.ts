export type JobsDataType = {
    id: string;
    title: string;
    description: string;
    industryTypes: string[];
    postedBy: {
        id: string;
        title: string;
    };
    companyName: {
        id: string;
        title: string;
    };
    employmentType: string[];
    roleName: string;
    minExperienceRequired: string;
    maxExperienceRequired: string;
    keyResponsibilities: string;
    jobLocation: LocationDataType[];
    salary: Record<string, any>;
    noticePeriodInDays: number;
    lastDateToApply: string;
    postedDate: string;
    educationalQualificationRequired: string;
    elgibleClassYear: string;
    GPARequirement: any;
    requiredSkills: Array<{title: string; level: string}>;
};

export type LocationDataType = {
    city: string;
    country: string;
    zipCode: number;
    address: string;
    noOfOpenPositions: number;
}
