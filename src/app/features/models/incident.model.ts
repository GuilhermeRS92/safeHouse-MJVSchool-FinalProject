export interface Incident {
    id: number,
    userId: number,
    type: string,
    incidentDate: Date | string,
    inclusionDate: Date | string,
    description: string,
    status: string
}
