import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import type {
    GetLoadsReqParams,
    GetLoadsRes,
    GetStatusesRes,
    GetCarriersRes,
} from './types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useLoadsQuery = (params?: GetLoadsReqParams) => {
    const [data, setData] = useState<GetLoadsRes | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLoads = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await axios.get<GetLoadsRes>(`${BASE_URL}/api/loads`, {
                params,
            });
            setData(res.data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'An unknown error occurred'
            );
        } finally {
            setIsLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchLoads();
    }, [fetchLoads]);

    return { data, isLoading, error, refetch: fetchLoads };
};

export const useStatusesQuery = () => {
    const [data, setData] = useState<GetStatusesRes | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStatuses = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await axios.get<GetStatusesRes>(
                `${BASE_URL}/api/statuses`
            );
            setData(res.data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'An unknown error occurred'
            );
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStatuses();
    }, [fetchStatuses]);

    return { data, isLoading, error, refetch: fetchStatuses };
};

export const useCarriersQuery = () => {
    const [data, setData] = useState<GetCarriersRes | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCarriers = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await axios.get<GetCarriersRes>(
                `${BASE_URL}/api/carriers`
            );
            setData(res.data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'An unknown error occurred'
            );
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCarriers();
    }, [fetchCarriers]);

    return { data, isLoading, error, refetch: fetchCarriers };
};
