
export interface StudentInfo {
    image: string | null;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    studentStatus: string;
    confirmPassword: string
}

export interface GuardianInfo {
    image: string | null;
    firstName: string;
    lastName: string;
}

