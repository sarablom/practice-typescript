import { HasFormatter } from '../interfaces/HasFormatter.js';

//Classes
//Access modifier: readonly, private (change only inside the class), public(change both inside and outside of the class). Public by default

export class Payment implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly recipient: string, 
        private details: string, 
        public amount: number){}

    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`
    }
}