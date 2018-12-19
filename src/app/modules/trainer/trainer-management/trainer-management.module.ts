import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AvailabilityComponent } from './availability/availability.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AvailabilityFormComponent } from './availability-form/availability-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { AddTrainingHistoryComponent } from './training-history/Modal/add-training-history/add-training-history.component';

import { EditTrainigHistoryComponent } from './training-history/Modal/edit-trainig-history/edit-trainig-history.component';

const routes: Routes = [
  {
    path: 'training-history',
    component: TrainerManagementComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrainerManagementComponent,
    PaymentHistoryComponent,
    AvailabilityComponent,
    PaymentFormComponent,
    AvailabilityFormComponent,
    TrainingHistoryComponent,
    AddTrainingHistoryComponent,
  
    EditTrainigHistoryComponent

  ],
  providers: [TrainingHistoryService]
})
export class TrainerManagementModule { }
