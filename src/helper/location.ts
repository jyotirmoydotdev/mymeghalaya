import { Position } from "@/types/locationTypes";
import { Distance } from "@/types/locationTypes";

const locations: Position[] = [
    { name: "LocationA", x: 1, y: 2, z: 3 },
    { name: "LocationB", x: 4, y: 5, z: 6 },
    { name: "LocationC", x: 7, y: 8, z: 9 },
    { name: "LocationD", x: 2, y: 3, z: 5 },
]

function calculateDistance(loc1: Position, loc2: Position): number {
    return Math.sqrt(
        Math.pow(loc1.x - loc2.x, 2) +
        Math.pow(loc1.y - loc2.y, 2) +
        Math.pow(loc1.z - loc2.z, 2) 
    );
}

function FindClosestLocations(locationName: string, locations: Position[], numClosest: number = 3): Distance[]{
    const origin = locations.find((loc) => loc.name === locationName);
    if (!origin){
        throw new Error(`Location ${locationName} not found.`);
    }

    const distances: Distance[] = locations
        .filter(loc => loc.name !== locationName)
        .map( loc => ({
            from: locationName,
            to: loc.name,
            distance: calculateDistance(origin, loc)
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, numClosest);

    return distances;
}

// const closestToA = findClosestLocations("LocationA", locations);

function CalculateNewLocation(referencePoints: Position[], distances: number[], newLocationName: string): Position{
    let x = 0, y = 0, z = 0;
    const learningRate = 0.001;
    const tolerance = 1e-6;
    let previousError = Infinity;

    for (let iter = 0; iter < 10000; iter++){
        let sumError = 0;
        let gradientX = 0, gradientY = 0, gradientZ = 0;

        for (let i = 0; i < referencePoints.length; i++){
            const ref = referencePoints[i];
            const d = distances[i];
            const calculatedDistance = Math.sqrt(Math.pow(x - ref.x, 2) + Math.pow(y - ref.y, 2) + Math.pow(z - ref.z, 2));
            const error = calculatedDistance - d;

            sumError += Math.pow(error, 2);

            gradientX += 2 * (error / calculatedDistance) * (x - ref.x);
            gradientY += 2 * (error / calculatedDistance) * (y - ref.y);
            gradientZ += 2 * (error / calculatedDistance) * (z - ref.z);
        }

        if (Math.abs(previousError - sumError) < tolerance) {
            break;
        }

        previousError = sumError;

        x -= learningRate * gradientX;
        y -= learningRate * gradientY;
        z -= learningRate * gradientZ;
    }

    return { name: newLocationName, x, y, z };
}

// Example usage:

// const referencePoints: Position[] = [
//     { name: "Ref1", x: 1, y: 2, z: 3 },
//     { name: "Ref2", x: 4, y: 5, z: 6 },
//     { name: "Ref3", x: 7, y: 8, z: 9 },
//     { name: "Ref4", x: 2, y: 3, z: 1 }
// ];
// const distances = [5.0, 6.0, 7.0, 5.5];

// const newLocation = calculateNewLocation(referencePoints, distances, "NewLocation");
// console.log(newLocation);