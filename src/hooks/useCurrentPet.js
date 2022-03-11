export default function useFindCurrentPet(id, rawData) {
    const currentPet = rawData.filter((pet) => pet.id === id);
    return currentPet;
}