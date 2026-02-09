import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";

interface LoginData {
    login: string;
    password: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [FormField],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    loginModel = signal<LoginData>({
        login: '',
        password: '',
    });

    loginForm = form(this.loginModel);
}