
export class Case {
 caseId:number=0;
 caseNumber!:string;
 practitioner!:string;
 practitionerId!:number;
 caseType!:string;
 caseTypeId!:number;
 fileOpeningDate:Date=new Date();
 eligibilityPeriod!:string;
 CloseDiscussion:Date=new Date();
 respondentProxyId!:number;
 respondentProxy!:string;
 chairmanCommitteeId!:number;
 chairmanCommittee!:string;
 publicRepresentativeId!:number;
 publicRepresentative!:string;
 appealSubmitterId!:number;
 appealSubmitter!:string;
 statusID!:number;
 status!:string;
}