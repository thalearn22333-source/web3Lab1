import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalConfig } from './global.config';
import { Header } from './header/header';
import { Product } from './product/product';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Product, Footer],
})
export class App {
  protected readonly title = signal('first-app');
  // Varible
  constructor() {
    // var name: string = 'Chantha';
    // console.log(name);
    // var fullName: string = 'Thoem Chantha';
    // console.log(fullName);
    // let price: number = 0.29;
    // console.log(price);
    // let completed: boolean = true;
    // console.log(completed);
    // let isStudent: boolean = true;
    // console.log(isStudent);
    // let numberId: number = 1;
    // for (numberId = 1; numberId <= 10; numberId++) {
    //   console.log(numberId);
    // }

    class Account {
      public accountName: string;
      protected balance: number;
      private pin: number;

      constructor(accountName: string, balance: number, pin: number) {
        this.accountName = accountName;
        this.balance = balance;
        this.pin = pin;
      }

      checkPin(pin: number): boolean {
        return this.pin === pin;
      }
    }

    class SavingAccount extends Account {
      constructor(accountName: string, balance: number, pin: number) {
        super(accountName, balance, pin);
      }

      addInterest(rate: number): void {
        this.balance += this.balance * rate;
        console.log(`New Balance after adding interest: ${this.balance}`);
      }
    }

    // Create object
    let savingAcc = new SavingAccount('John Doe', 1000, 1234);

    console.log(`Account Name: ${savingAcc.accountName}`);

    savingAcc.addInterest(0.05);

    // Generics
    let Message: string;
    function testGenericses(Student: string): string {
      return Student;
    }
    console.log(`App Name:${GlobalConfig.appName}`);
    console.log(`App Version:${GlobalConfig.appVersion}`);
    // console.log(`Message:${message<string>}`)
  }
}
