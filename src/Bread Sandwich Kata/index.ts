export function slices_to_name(slices: number): string {
    if (slices == 2) {
        return 'sandwich';
    } else if (slices === 3) {
        return 'bread sandwich'
    } else if (slices === 4) {
        return 'sandwich sandwich'
    } else if (slices === 5) {
        return 'bread sandwich sandwich'
    }

    return null;
};

export function name_to_slices(name: string): number {
    if (name === 'sandwich') {
        return 2;
    }

    if (name === 'bread sandwich') {
        return 3;
    }

    if (name === 'sandwich sandwich') {
        return 4;
    }

    return null;
};