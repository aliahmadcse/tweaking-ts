@classDecorator
class Boat {

  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError("Oops, boat was sunk in ocean")
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }

}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}


function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);

}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}


function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot("fast");
