export function cookingTime(eggs: number): number {
    if (eggs === 0) {
        return 0;
    }

    const eggsPerBatch = 8;
    const timePerEgg = 5;

    const batches = Math.ceil(eggs / eggsPerBatch);
    const totalTime = batches * timePerEgg;

    return totalTime;
}