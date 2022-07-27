export type Referral = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
  } 

export type ReferralRequest = {
    referral ?: Referral;
}

