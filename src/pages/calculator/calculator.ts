import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})

export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  systemType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.systemType = "metric";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0 ) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  calculateBMI2() {
    if (this.weight > 0 && this.height > 0 ) {
      let finalBmi = (this.weight * 703) / (this.height * this.height);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

private setBMIMessage() {
  if (this.bmiValue < 18.5) {
    this.bmiMessage = "Underweight"
  }

  if (this.bmiValue > 18.5 && this.bmiValue < 25) {
    this.bmiMessage = "Normal"
  }

  if (this.bmiValue > 25 && this.bmiValue < 30) {
    this.bmiMessage = "Overweight"
  }

  if (this.bmiValue > 30) {
    this.bmiMessage = "Obese"
  }
}

}
