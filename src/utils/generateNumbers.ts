export const generateNumbers = (max: number): number[] => {
    return Array.from({ length: max }, (_, i) => i + 1);
};
