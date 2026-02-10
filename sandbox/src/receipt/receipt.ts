import { Component, inject } from "@angular/core";
import { Calculator } from "./calculator";

@Component({
    selector: 'app-receipt',
    template: `
        <h1>The total is {{ totalCost }}</h1>
    `
})
export class Receipt {
    private calculator = inject(Calculator)
    totalCost = this.calculator.add(50, 25)
}