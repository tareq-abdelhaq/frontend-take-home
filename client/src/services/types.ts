export interface GetLoadsReqParams {
    page?: number;
    limit?: number;
    status?: number;
    carrier?: number;
    search?: string;
}

export interface GetLoadsRes {
    data: Array<Load>;
    pagination: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}

export interface Load {
    id: string;
    origin: string;
    destination: string;
    status: number;
    date: string;
    weight: number;
    carrier: number;
    price: number;
}

export enum StatusEnum {
    PENDING = 'Pending',
    IN_TRANSIT = 'In Transit',
    DELIVERED = 'Delivered',
    CANCELLED = 'Cancelled',
}

export type GetStatusesRes = Array<{
    id: number;
    label: StatusEnum;
}>;

export type GetCarriersRes = Array<{
    id: number;
    label: string;
}>;
