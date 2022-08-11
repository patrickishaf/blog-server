export const getUTCDateFormat = (timestamp: number): string => {
    return new Date(timestamp).toUTCString();
}