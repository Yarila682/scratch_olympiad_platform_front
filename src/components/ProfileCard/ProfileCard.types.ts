import { Roles } from "@/models";

export interface ProfileData {
    id: string;
    email: string;
    fullName: string;
    fullNameNative: string;
    role: Roles;
    createdAt: string;
    city: string;
    country: string;
    birthdate: string;
    // TODO был в сети
}

export interface ProfileFormInputs {
    email: string;
    fullName: string;
    fullNameNative: string;
    city: string;
    countryId: string;
    birthdate: string;
}