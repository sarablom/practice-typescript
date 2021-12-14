//Classes
//Access modifier: readonly, private (change only inside the class), public(change both inside and outside of the class). Public by default
export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
