import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import MedicalTreatmentView from '../views/MedicalTreatmentView.vue'
import MoreView from '../views/MoreView.vue'
import PatientRightView from '../views/PatientRightView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: IntroductionView
  },
  {
    path: '/medicalTreatment',
    name: 'medicalTreatment',
    component: MedicalTreatmentView
  },
  {
    path: '/more',
    name: 'more',
    component: MoreView
  },
  {
    path: '/patientRight',
    name: 'patientRight',
    component: PatientRightView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
