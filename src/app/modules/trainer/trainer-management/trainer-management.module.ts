import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { ViewTrainingHistoryComponent } from './training-history/view-training-history/view-training-history.component';
import { AddTrainingHistoryComponent } from './training-history/add-training-history/add-training-history.component';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddAcademicQualificationComponent } from './profile/add-academic-qualification/add-academic-qualification.component';
import { AddProfessionalQualificationComponent } from './profile/add-professional-qualification/add-professional-qualification.component';
import { AcademicQualificationComponent } from './profile/academic-qualification/academic-qualification.component';
import { ProfessionalQualificationComponent } from './profile/professional-qualification/professional-qualification.component';
import { ProfessionalMenberShipsComponent } from './profile/professional-menber-ships/professional-menber-ships.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { FormProfessionalComponent } from './profile/form-professional/form-professional.component';
import { FormUniversityComponent } from './profile/form-university/form-university.component';
import { SuggestionAndFeedbackComponent } from './suggestion-and-feedback/suggestion-and-feedback.component';
import { GeneralInformationComponent } from './profile/general-information/general-information.component';
import { TechnologySkillLevelComponent } from './profile/technology-skill-level/technology-skill-level.component';
import { RecordOfEmploymentComponent } from './profile/record-of-employment/record-of-employment.component';
import { AddSuggestionComponent } from './suggestion-and-feedback/Modal/add-suggestion/add-suggestion.component';
import { ViewOwnSuggestionComponent } from './suggestion-and-feedback/Modal/view-own-suggestion/view-own-suggestion.component';
import { ViewSuggestionComponent } from './suggestion-and-feedback/Modal/view-suggestion/view-suggestion.component';
import { AddRecordOfEmploymentComponent } from './profile/record-of-employment/add-record-of-employment/add-record-of-employment.component';
import { EditRecordOfEmploymentComponent } from './profile/record-of-employment/edit-record-of-employment/edit-record-of-employment.component';
import { AddTechnologySkillLevelComponent } from './profile/technology-skill-level/add-technology-skill-level/add-technology-skill-level.component';
import { EditTechnologySkillLevelComponent } from './profile/technology-skill-level/edit-technology-skill-level/edit-technology-skill-level.component';
import { SuggestionService } from '../Service/suggestion.service';
import { TrainerAvailabilityComponent } from './trainer-availability/trainer-availability.component';
import { ViewAvailabilityComponent } from './trainer-availability/view-availability/view-availability.component';
import { ScheduleComponent } from './trainer-availability/schedule/schedule.component';
import { AddAvailabilityComponent } from './trainer-availability/add-availability/add-availability.component';

const routes: Routes = [
  {
    path: 'training-history',
    component: TrainingHistoryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'suggestion',
    component: SuggestionAndFeedbackComponent
  },
  {
    path: 'trainer-availability',
    component: TrainerAvailabilityComponent
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
    
    PaymentFormComponent,
    TrainingHistoryComponent,
    ViewTrainingHistoryComponent,
    AddTrainingHistoryComponent,
    ProfileComponent,
    AddAcademicQualificationComponent,
    AddProfessionalQualificationComponent,
    AcademicQualificationComponent,
    ProfessionalQualificationComponent,
    ProfessionalMenberShipsComponent,
    ViewProfileComponent,
    FormProfessionalComponent,
    FormUniversityComponent,
    SuggestionAndFeedbackComponent,
    GeneralInformationComponent,
    TechnologySkillLevelComponent,
    RecordOfEmploymentComponent,
    AddSuggestionComponent,
    ViewOwnSuggestionComponent,
    ViewSuggestionComponent,
    AddRecordOfEmploymentComponent,
    EditRecordOfEmploymentComponent,
    AddTechnologySkillLevelComponent,
    EditTechnologySkillLevelComponent,
    TrainerAvailabilityComponent,
    ViewAvailabilityComponent,
    ScheduleComponent,
    AddAvailabilityComponent
  ],
  providers: [TrainingHistoryService,SuggestionService]
})
export class TrainerManagementModule { }
