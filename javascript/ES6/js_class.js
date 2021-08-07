//CLASS
				class Animal {
					constructor(name) {
						this.name = name;
					}
					speak() {
						console.log(`${this.name} barks!`);
					}
				}

				class Dog extends Animal {
					constructor(name, breed) {
						super(name);
						this.breed = breed;
					}
					speak() {
						console.log(`${this.name} barks!`);
					}
					dogbreed() {
						console.log(`${this.name} is a ${this.breed} breed`);
					}
				}

				const puppy = new Dog(`Spot`, `Puppy`);
				puppy.speak();
				puppy.dogbreed();