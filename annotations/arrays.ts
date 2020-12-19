const carMakers: (string | number)[] = ["toyota", "suzuki", "mehran", 1];

const date: Date[] = [new Date(), new Date()];

const carByMake: string[][] = [["f15"], ["r34"], ["f56"]];

const countOfProducts: (string | number)[][] = [
    [2, "jars"],
    [3, "bananas"],
];

const newCars = carMakers.map((car: string | number): string | number => {
    return car;
});

console.log(newCars);
