import { Component } from '@angular/core';
//import { NavController } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
//import { AlertController } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Milk",
      quantity: 3
    },
  ];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item: any, index: number) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    });
    await toast.present();
    
    this.items.splice(index, 1);
  }
  
  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Item',
      message: 'Please enter an item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }

}
