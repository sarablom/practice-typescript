import { HasFormatter } from '../interfaces/HasFormatter.js';

//Classes
//Access modifier: readonly, private (change only inside the class), public(change both inside and outside of the class). Public by default

export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number,
    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}